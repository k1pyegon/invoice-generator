import { getSupabaseClient } from "./client";
import type { ProfileRow } from "./types";

export const getProfile = async (userId: string) => {
  const { data, error } = await getSupabaseClient()
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();

  if (error) throw error;
  return data as ProfileRow | null;
};

export const upsertProfile = async (
  userId: string,
  details: { yourDetails: YourDetails; companyDetails: CompanyDetails }
) => {
  const { error } = await getSupabaseClient().from("profiles").upsert({
    id: userId,
    your_details: details.yourDetails,
    company_details: details.companyDetails,
    updated_at: new Date().toISOString(),
  });

  if (error) throw error;
};
