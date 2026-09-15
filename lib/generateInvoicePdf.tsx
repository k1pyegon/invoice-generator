import { Document, Page, pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { PdfDetails } from "@/app/component/form/pdfDetails";
import { pdfContainers } from "@/lib/pdfStyles";
import { svgToDataUri } from "@/lib/svgToDataUri";
import { currencyList } from "@/lib/currency";

export interface InvoicePdfData {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
}

export const generateInvoicePdfBlob = async (
  data: InvoicePdfData
): Promise<Blob> => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() ===
      data.invoiceDetails.currency?.toLowerCase()
  )?.details;

  const defaultCurrency = currencyList.find(
    (currencyDetail) => currencyDetail.value.toLowerCase() === "usd"
  )?.details;

  const svgResponse = await fetch(
    `/flag/1x1/${currencyDetails?.iconName || defaultCurrency?.iconName}.svg`
  );
  const svgFlag = await svgResponse.text();
  const countryImageUrl = await svgToDataUri(svgFlag);

  if (!countryImageUrl) {
    throw new Error("Failed to render currency flag for invoice PDF");
  }

  return pdf(
    <Document>
      <Page size="A4" style={pdfContainers.page}>
        <PdfDetails
          companyDetails={data.companyDetails}
          invoiceDetails={data.invoiceDetails}
          invoiceTerms={data.invoiceTerms}
          paymentDetails={data.paymentDetails}
          yourDetails={data.yourDetails}
          countryImageUrl={countryImageUrl}
        />
      </Page>
    </Document>
  ).toBlob();
};

export const downloadInvoicePdf = async (data: InvoicePdfData) => {
  const blob = await generateInvoicePdfBlob(data);
  saveAs(blob, `invoice-${data.invoiceTerms.invoiceNumber || "draft"}.pdf`);
};
