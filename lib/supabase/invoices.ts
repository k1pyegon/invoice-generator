import { getSupabaseClient } from "./client";
import type { InvoiceRow } from "./types";

export const createInvoice = async (
  userId: string,
  data: {
    yourDetails: YourDetails;
    companyDetails: CompanyDetails;
    invoiceDetails: InvoiceItemDetails;
    paymentDetails: PaymentDetails;
    invoiceTerms: InvoiceTerms;
  }
) => {
  const { error } = await getSupabaseClient().from("invoices").insert({
    user_id: userId,
    invoice_number: data.invoiceTerms.invoiceNumber ?? null,
    your_details: data.yourDetails,
    company_details: data.companyDetails,
    invoice_details: data.invoiceDetails,
    payment_details: data.paymentDetails,
    invoice_terms: data.invoiceTerms,
  });

  if (error) throw error;
};

export const listInvoices = async (userId: string) => {
  const { data, error } = await getSupabaseClient()
    .from("invoices")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as InvoiceRow[];
};
