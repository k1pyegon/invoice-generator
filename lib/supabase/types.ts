export interface ProfileRow {
  id: string;
  your_details: YourDetails;
  company_details: CompanyDetails;
  updated_at: string;
}

export interface InvoiceRow {
  id: string;
  user_id: string;
  invoice_number: string | null;
  your_details: YourDetails;
  company_details: CompanyDetails;
  invoice_details: InvoiceItemDetails;
  payment_details: PaymentDetails;
  invoice_terms: InvoiceTerms;
  created_at: string;
}
