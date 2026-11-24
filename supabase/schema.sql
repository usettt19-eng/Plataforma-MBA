-- =============================================================================
-- Plataforma-MBA · Esquema PostgreSQL + RLS + Verificación Pública de Diplomas
-- Compatible con re-ejecución idempotente en Supabase SQL Editor.
-- Proyecto destino: https://jeabjhqyjdxztjebmxjw.supabase.co
-- =============================================================================

create extension if not exists pgcrypto;

-- -----------------------------------------------------------------------------
-- 1. Funciones auxiliares y triggers de seguridad
-- -----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.prevent_profile_role_escalation()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.role is distinct from old.role then
    if current_user not in ('postgres', 'supabase_admin', 'service_role')
       and coalesce(auth.jwt()->>'role', '') <> 'service_role' then
      raise exception 'No está permitido modificar el rol del perfil desde el cliente.';
    end if;
  end if;
  return new;
end;
$$;

create or replace function public.prevent_cert_status_tampering()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.status is distinct from old.status then
    if current_user not in ('postgres', 'supabase_admin', 'service_role')
       and coalesce(auth.jwt()->>'role', '') <> 'service_role' then
      raise exception 'Solo administración puede cambiar el estado de revocación de un certificado.';
    end if;
  end if;
  return new;
end;
$$;

-- -----------------------------------------------------------------------------
-- 2. Tabla de perfiles de usuario (enlazada a auth.users)
-- -----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text not null default '',
  company text not null default '',
  role text not null default 'student' check (role in ('student', 'trainer', 'admin')),
  cert_org text not null default 'Escuela Ejecutiva de Dirección, Ventas e Innovación',
  cert_signer text not null default 'Dra. Elena Navarro · Dirección Académica',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop trigger if exists trg_profiles_updated_at on public.profiles;
create trigger trg_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists trg_profiles_prevent_role_escalation on public.profiles;
create trigger trg_profiles_prevent_role_escalation
  before update on public.profiles
  for each row execute function public.prevent_profile_role_escalation();

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  to authenticated
  with check ((select auth.uid()) = id and role = 'student');

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

-- Creación automática de perfil al registrarse un usuario en auth.users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_name text;
begin
  v_name := coalesce(
    nullif(trim(new.raw_user_meta_data->>'full_name'), ''),
    nullif(split_part(coalesce(new.email, ''), '@', 1), ''),
    'Alumno'
  );

  insert into public.profiles (id, full_name, email)
  values (new.id, v_name, coalesce(new.email, ''))
  on conflict (id) do update
    set email = excluded.email,
        full_name = case
          when public.profiles.full_name = '' then excluded.full_name
          else public.profiles.full_name
        end;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- -----------------------------------------------------------------------------
-- 3. Matrículas / accesos por programa
-- -----------------------------------------------------------------------------
create table if not exists public.enrollments (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  enrolled_at timestamptz not null default now(),
  last_accessed_at timestamptz not null default now(),
  primary key (user_id, program_id)
);

alter table public.enrollments enable row level security;

drop policy if exists "enrollments_select_own" on public.enrollments;
create policy "enrollments_select_own"
  on public.enrollments for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "enrollments_insert_own" on public.enrollments;
create policy "enrollments_insert_own"
  on public.enrollments for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "enrollments_update_own" on public.enrollments;
create policy "enrollments_update_own"
  on public.enrollments for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "enrollments_delete_own" on public.enrollments;
create policy "enrollments_delete_own"
  on public.enrollments for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 4. Progreso y cuaderno por tema
-- -----------------------------------------------------------------------------
create table if not exists public.topic_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  topic_id text not null,
  completed boolean not null default false,
  notes text not null default '',
  study_seconds integer not null default 0 check (study_seconds >= 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, program_id, topic_id)
);

create index if not exists idx_topic_progress_user_prog
  on public.topic_progress (user_id, program_id);

alter table public.topic_progress enable row level security;

drop trigger if exists trg_topic_progress_updated_at on public.topic_progress;
create trigger trg_topic_progress_updated_at
  before update on public.topic_progress
  for each row execute function public.set_updated_at();

drop policy if exists "topic_progress_select_own" on public.topic_progress;
create policy "topic_progress_select_own"
  on public.topic_progress for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "topic_progress_insert_own" on public.topic_progress;
create policy "topic_progress_insert_own"
  on public.topic_progress for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "topic_progress_update_own" on public.topic_progress;
create policy "topic_progress_update_own"
  on public.topic_progress for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "topic_progress_delete_own" on public.topic_progress;
create policy "topic_progress_delete_own"
  on public.topic_progress for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 5. Entregas de talleres prácticos y calculadoras
-- -----------------------------------------------------------------------------
create table if not exists public.workshop_submissions (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  block_id text not null,
  completed boolean not null default false,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, program_id, block_id)
);

alter table public.workshop_submissions enable row level security;

drop trigger if exists trg_workshop_submissions_updated_at on public.workshop_submissions;
create trigger trg_workshop_submissions_updated_at
  before update on public.workshop_submissions
  for each row execute function public.set_updated_at();

drop policy if exists "workshop_submissions_select_own" on public.workshop_submissions;
create policy "workshop_submissions_select_own"
  on public.workshop_submissions for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "workshop_submissions_insert_own" on public.workshop_submissions;
create policy "workshop_submissions_insert_own"
  on public.workshop_submissions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "workshop_submissions_update_own" on public.workshop_submissions;
create policy "workshop_submissions_update_own"
  on public.workshop_submissions for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "workshop_submissions_delete_own" on public.workshop_submissions;
create policy "workshop_submissions_delete_own"
  on public.workshop_submissions for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 6. Calificaciones de exámenes por bloque
-- -----------------------------------------------------------------------------
create table if not exists public.exam_attempts (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  block_id text not null,
  best_score integer not null default 0 check (best_score between 0 and 100),
  last_score integer not null default 0 check (last_score between 0 and 100),
  passed boolean not null default false,
  attempts integer not null default 0 check (attempts >= 0),
  last_attempt_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, program_id, block_id)
);

alter table public.exam_attempts enable row level security;

drop trigger if exists trg_exam_attempts_updated_at on public.exam_attempts;
create trigger trg_exam_attempts_updated_at
  before update on public.exam_attempts
  for each row execute function public.set_updated_at();

drop policy if exists "exam_attempts_select_own" on public.exam_attempts;
create policy "exam_attempts_select_own"
  on public.exam_attempts for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "exam_attempts_insert_own" on public.exam_attempts;
create policy "exam_attempts_insert_own"
  on public.exam_attempts for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "exam_attempts_update_own" on public.exam_attempts;
create policy "exam_attempts_update_own"
  on public.exam_attempts for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "exam_attempts_delete_own" on public.exam_attempts;
create policy "exam_attempts_delete_own"
  on public.exam_attempts for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 7. Acumulador agregado de tiempo de estudio por programa
-- -----------------------------------------------------------------------------
create table if not exists public.program_study_time (
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  total_seconds integer not null default 0 check (total_seconds >= 0),
  by_block jsonb not null default '{}'::jsonb,
  by_topic jsonb not null default '{}'::jsonb,
  by_day jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, program_id)
);

alter table public.program_study_time enable row level security;

drop trigger if exists trg_program_study_time_updated_at on public.program_study_time;
create trigger trg_program_study_time_updated_at
  before update on public.program_study_time
  for each row execute function public.set_updated_at();

drop policy if exists "program_study_time_select_own" on public.program_study_time;
create policy "program_study_time_select_own"
  on public.program_study_time for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "program_study_time_insert_own" on public.program_study_time;
create policy "program_study_time_insert_own"
  on public.program_study_time for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "program_study_time_update_own" on public.program_study_time;
create policy "program_study_time_update_own"
  on public.program_study_time for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "program_study_time_delete_own" on public.program_study_time;
create policy "program_study_time_delete_own"
  on public.program_study_time for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 8. Historial granular de sesiones de estudio
-- -----------------------------------------------------------------------------
create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  block_id text,
  topic_id text,
  label text not null,
  seconds integer not null check (seconds > 0),
  recorded_at timestamptz not null default now()
);

create index if not exists idx_study_sessions_user_prog_date
  on public.study_sessions (user_id, program_id, recorded_at desc);

alter table public.study_sessions enable row level security;

drop policy if exists "study_sessions_select_own" on public.study_sessions;
create policy "study_sessions_select_own"
  on public.study_sessions for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "study_sessions_insert_own" on public.study_sessions;
create policy "study_sessions_insert_own"
  on public.study_sessions for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "study_sessions_delete_own" on public.study_sessions;
create policy "study_sessions_delete_own"
  on public.study_sessions for delete
  to authenticated
  using ((select auth.uid()) = user_id);

-- -----------------------------------------------------------------------------
-- 9. Certificados oficiales emitidos (lectura restringida al titular + RPC pública)
-- -----------------------------------------------------------------------------
create table if not exists public.certificates (
  cert_id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  program_id text not null check (program_id in ('dind', 'gmba', 'pmp', 'emba', 'iael')),
  holder_name text not null,
  program_name text not null,
  org_name text not null,
  signer_name text not null,
  duration_label text not null,
  avg_score integer not null check (avg_score between 0 and 100),
  total_study_seconds integer not null default 0 check (total_study_seconds >= 0),
  transcript jsonb not null default '[]'::jsonb,
  issued_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  status text not null default 'valid' check (status in ('valid', 'revoked')),
  unique (user_id, program_id)
);

alter table public.certificates enable row level security;

drop trigger if exists trg_certificates_updated_at on public.certificates;
create trigger trg_certificates_updated_at
  before update on public.certificates
  for each row execute function public.set_updated_at();

drop trigger if exists trg_certificates_prevent_status_tampering on public.certificates;
create trigger trg_certificates_prevent_status_tampering
  before update on public.certificates
  for each row execute function public.prevent_cert_status_tampering();

-- Solo el titular puede leer su registro en tabla directa (nunca escaneo público masivo)
drop policy if exists "certificates_select_own" on public.certificates;
create policy "certificates_select_own"
  on public.certificates for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "certificates_insert_own" on public.certificates;
create policy "certificates_insert_own"
  on public.certificates for insert
  to authenticated
  with check ((select auth.uid()) = user_id and status = 'valid');

drop policy if exists "certificates_update_own" on public.certificates;
create policy "certificates_update_own"
  on public.certificates for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "certificates_delete_own" on public.certificates;
create policy "certificates_delete_own"
  on public.certificates for delete
  to authenticated
  using ((select auth.uid()) = user_id and status = 'valid');

-- -----------------------------------------------------------------------------
-- 10. RPC pública de verificación puntual por ID de certificado
-- -----------------------------------------------------------------------------
create or replace function public.verify_certificate(p_cert_id text)
returns table (
  cert_id text,
  program_id text,
  holder_name text,
  program_name text,
  org_name text,
  signer_name text,
  duration_label text,
  avg_score integer,
  total_study_seconds integer,
  transcript jsonb,
  issued_at timestamptz,
  status text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    c.cert_id,
    c.program_id,
    c.holder_name,
    c.program_name,
    c.org_name,
    c.signer_name,
    c.duration_label,
    c.avg_score,
    c.total_study_seconds,
    c.transcript,
    c.issued_at,
    c.status
  from public.certificates c
  where nullif(trim(p_cert_id), '') is not null
    and upper(trim(c.cert_id)) = upper(trim(p_cert_id))
  limit 1;
$$;

revoke all on function public.verify_certificate(text) from public;
grant execute on function public.verify_certificate(text) to anon, authenticated;

-- -----------------------------------------------------------------------------
-- 11. Bootstrap inicial de Administrador (ejecutar manualmente una vez)
-- Sustituye el correo por tu cuenta de administrador creada en Authentication -> Users:
--
--   update public.profiles
--   set role = 'admin'
--   where lower(email) = lower('tu-admin@useservices.company');
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- 12. Tabla de Leads Comerciales para Landing Page (academia.useservices.company)
-- -----------------------------------------------------------------------------
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null default '',
  company text not null default '',
  program_interest text not null default 'all',
  plan_interest text not null default 'allAccess',
  message text not null default '',
  source_url text not null default '',
  utm_source text not null default '',
  utm_medium text not null default '',
  utm_campaign text not null default '',
  status text not null default 'new' check (status in ('new', 'contacted', 'enrolled', 'archived')),
  created_at timestamptz not null default now()
);

create index if not exists idx_leads_created_status
  on public.leads (created_at desc, status);

alter table public.leads enable row level security;

drop policy if exists "leads_public_insert" on public.leads;
create policy "leads_public_insert"
  on public.leads for insert
  to anon, authenticated
  with check (length(trim(full_name)) >= 2 and position('@' in email) > 1);

drop policy if exists "leads_admin_select" on public.leads;
create policy "leads_admin_select"
  on public.leads for select
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.role = 'admin'
    )
  );

drop policy if exists "leads_admin_update" on public.leads;
create policy "leads_admin_update"
  on public.leads for update
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.role = 'admin'
    )
  );

drop policy if exists "leads_admin_delete" on public.leads;
create policy "leads_admin_delete"
  on public.leads for delete
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid()) and p.role = 'admin'
    )
  );
