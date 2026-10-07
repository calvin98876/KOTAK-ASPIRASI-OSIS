-- KOTAK ASPIRASI OSIS
-- Jalankan seluruh file ini di Supabase > SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.aspirations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  category text not null check (
    category in ('Saran', 'Kritik', 'Fasilitas', 'Kegiatan OSIS', 'Akademik', 'Lainnya')
  ),
  message text not null check (char_length(message) between 5 and 2000),
  is_anonymous boolean not null default true,
  student_name text,
  student_class text check (
    student_class is null or student_class in ('X', 'XI', 'XII')
  ),
  status text not null default 'Belum Dibaca' check (
    status in ('Belum Dibaca', 'Diproses', 'Selesai')
  ),
  constraint anonymous_identity_check check (
    is_anonymous = true
    or (student_name is not null and student_class is not null)
  )
);

alter table public.admin_users enable row level security;
alter table public.aspirations enable row level security;

-- Admin tidak perlu bisa membaca daftar admin dari browser.
revoke all on table public.admin_users from anon, authenticated;

-- Siswa boleh membuat aspirasi.
grant insert on table public.aspirations to anon, authenticated;

-- Pengurus yang emailnya ada di admin_users boleh melihat, mengubah status,
-- dan menghapus aspirasi.
grant select, update, delete on table public.aspirations to authenticated;

drop policy if exists "Anyone can submit aspirations" on public.aspirations;
create policy "Anyone can submit aspirations"
on public.aspirations
for insert
to anon, authenticated
with check (
  is_anonymous = true
  or (
    is_anonymous = false
    and student_name is not null
    and student_class is not null
  )
);

drop policy if exists "Admins can read aspirations" on public.aspirations;
create policy "Admins can read aspirations"
on public.aspirations
for select
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where lower(a.email) = lower((select auth.jwt() ->> 'email'))
  )
);

drop policy if exists "Admins can update aspirations" on public.aspirations;
create policy "Admins can update aspirations"
on public.aspirations
for update
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where lower(a.email) = lower((select auth.jwt() ->> 'email'))
  )
)
with check (
  exists (
    select 1
    from public.admin_users a
    where lower(a.email) = lower((select auth.jwt() ->> 'email'))
  )
);

drop policy if exists "Admins can delete aspirations" on public.aspirations;
create policy "Admins can delete aspirations"
on public.aspirations
for delete
to authenticated
using (
  exists (
    select 1
    from public.admin_users a
    where lower(a.email) = lower((select auth.jwt() ->> 'email'))
  )
);

-- Catatan:
-- Jangan pernah memasukkan service_role/secret key ke frontend.
-- Publishable key aman digunakan di frontend selama RLS dikonfigurasi dengan benar.