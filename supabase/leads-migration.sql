-- =============================================================================
-- Plataforma-MBA · Tabla de Leads Comerciales para Landing Page (academia.*)
-- Idempotente: puede ejecutarse directamente en Supabase SQL Editor.
-- =============================================================================

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

-- Visitantes de la landing pueden enviar solicitudes (solo INSERT validado; cero lectura pública)
drop policy if exists "leads_public_insert" on public.leads;
create policy "leads_public_insert"
  on public.leads for insert
  to anon, authenticated
  with check (length(trim(full_name)) >= 2 and position('@' in email) > 1);

-- Solo administradores pueden consultar, gestionar o borrar leads
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
