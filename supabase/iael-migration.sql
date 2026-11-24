-- =============================================================================
-- Plataforma-MBA · Migración Idempotente para 5.º Programa ('iael')
-- IA Aplicada al Diseño y Modelado de Instalaciones Eléctricas
-- Ejecutar en Supabase -> SQL Editor -> New Query
-- =============================================================================

do $$
declare
  tbl text;
  cname text;
  target_tables text[] := array[
    'enrollments',
    'topic_progress',
    'workshop_submissions',
    'exam_attempts',
    'program_study_time',
    'study_sessions',
    'certificates'
  ];
begin
  foreach tbl in array target_tables loop
    -- Elimina cualquier constraint CHECK existente sobre program_id en la tabla
    for cname in
      select con.conname
      from pg_constraint con
      join pg_class rel on rel.oid = con.conrelid
      join pg_namespace nsp on nsp.oid = rel.relnamespace
      where nsp.nspname = 'public'
        and rel.relname = tbl
        and con.contype = 'c'
        and pg_get_constraintdef(con.oid) ilike '%program_id%'
    loop
      execute format('alter table public.%I drop constraint if exists %I', tbl, cname);
    end loop;

    -- Añade el CHECK actualizado incluyendo los 5 programas
    execute format(
      'alter table public.%I add constraint %I check (program_id in (''dind'', ''gmba'', ''pmp'', ''emba'', ''iael''))',
      tbl,
      tbl || '_program_id_check'
    );
  end loop;
end
$$;
