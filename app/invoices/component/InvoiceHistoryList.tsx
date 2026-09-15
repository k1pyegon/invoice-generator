"use client";

import { useEffect, useState } from "react";
import { Download, LoaderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/hooks/useAuth";
import { SignInButton } from "@/app/component/auth/SignInButton";
import { listInvoices } from "@/lib/supabase/invoices";
import { downloadInvoicePdf } from "@/lib/generateInvoicePdf";
import type { InvoiceRow } from "@/lib/supabase/types";

export const InvoiceHistoryList = () => {
  const { user, status: authStatus } = useAuth();
  const [invoices, setInvoices] = useState<InvoiceRow[] | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    listInvoices(user.id)
      .then(setInvoices)
      .catch((e) => {
        console.error("Failed to load invoice history:", e);
        setInvoices([]);
      });
  }, [user]);

  if (authStatus === "loading") {
    return (
      <div className="flex justify-center py-24">
        <LoaderIcon className="h-6 w-6 animate-spin text-neutral-400" />
      </div>
    );
  }

  if (authStatus === "unauthenticated" || !user) {
    return (
      <div className="flex flex-col items-center gap-4 py-24 text-center">
        <p className="text-neutral-500 text-lg max-w-sm">
          Sign in with Google to view your invoice history.
        </p>
        <SignInButton />
      </div>
    );
  }

  if (invoices === null) {
    return (
      <div className="flex justify-center py-24">
        <LoaderIcon className="h-6 w-6 animate-spin text-neutral-400" />
      </div>
    );
  }

  if (invoices.length === 0) {
    return (
      <p className="text-neutral-500 text-center py-24">
        You haven&apos;t generated any invoices yet.
      </p>
    );
  }

  return (
    <div className="divide-y divide-neutral-200">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex items-center justify-between py-4"
        >
          <div>
            <p className="font-medium">
              {invoice.invoice_number || "Untitled invoice"}
            </p>
            <p className="text-sm text-neutral-500">
              {invoice.company_details?.companyName || "No client name"} ·{" "}
              {new Date(invoice.created_at).toLocaleDateString()}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={downloadingId === invoice.id}
            onClick={async () => {
              setDownloadingId(invoice.id);
              try {
                await downloadInvoicePdf({
                  yourDetails: invoice.your_details,
                  companyDetails: invoice.company_details,
                  invoiceDetails: invoice.invoice_details,
                  paymentDetails: invoice.payment_details,
                  invoiceTerms: invoice.invoice_terms,
                });
              } catch (e) {
                console.error("Failed to regenerate invoice:", e);
              } finally {
                setDownloadingId(null);
              }
            }}
          >
            {downloadingId === invoice.id ? (
              <LoaderIcon className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" /> Download
              </>
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};
