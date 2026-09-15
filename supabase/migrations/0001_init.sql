-- profiles: one row per user; reusable "from"/"company" details for prefill
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  your_details jsonb not null default '{}'::jsonb,
  company_details jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- invoices: one immutable row per generated invoice (full snapshot, never the PDF)
create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  invoice_number text,
  your_details jsonb not null default '{}'::jsonb,
  company_details jsonb not null default '{}'::jsonb,
  invoice_details jsonb not null default '{}'::jsonb,
  payment_details jsonb not null default '{}'::jsonb,
  invoice_terms jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists invoices_user_id_created_at_idx
  on public.invoices (user_id, created_at desc);

alter table public.invoices enable row level security;

create policy "invoices_select_own" on public.invoices
  for select using (auth.uid() = user_id);
create policy "invoices_insert_own" on public.invoices
  for insert with check (auth.uid() = user_id);
create policy "invoices_delete_own" on public.invoices
  for delete using (auth.uid() = user_id);
