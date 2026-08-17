import { PreviewDetails } from "@/app/component/form/previewDetails";

const DemoPreview = () => (
  <div className="mx-auto w-full flex justify-center items-center">
    <PreviewDetails
      companyDetails={defaultValue.companyDetails}
      invoiceDetails={defaultValue.invoiceDetails}
      invoiceTerms={defaultValue.invoiceTerms}
      paymentDetails={defaultValue.paymentDetails}
      yourDetails={defaultValue.yourDetails}
    />
  </div>
);

const defaultValue = {
  companyDetails: {
    companyName: "Acme Corp",
    companyAddress: "1600 Amphitheatre Parkway",
    companyCity: "Mountain View",
    companyState: "CA",
    companyCountry: "USA",
    companyLogo: "/android-chrome-192x192.png",
    companyTaxId: "",
    companyZip: "94043",
    email: "billing@acme.example",
  },
  yourDetails: {
    yourName: "Barnview",
    yourAddress: "123 Business Avenue",
    yourCity: "Nairobi",
    yourState: "",
    yourCountry: "Kenya",
    yourLogo: "/android-chrome-192x192.png",
    yourEmail: "hello@barnview.org",
    yourTaxId: "",
    yourZip: "00100",
  },
  paymentDetails: {
    bankName: "Sample Bank",
    accountNumber: "1234567890",
    accountName: "BARNVIEW",
    routingCode: "123456",
    swiftCode: "SAMPLEXX123",
    ifscCode: "",
    currency: "USD",
  },
  invoiceTerms: {
    invoiceNumber: "Invoice #25",
    issueDate: "Fri Apr 19 2024 00:00:00 GMT+0530 (India Standard Time)",
    dueDate: "Mon Apr 22 2024 00:00:00 GMT+0530 (India Standard Time)",
  },
  invoiceDetails: {
    note: "Services Period  21/03/2024 to 20/04/2024",
    discount: "22000",
    taxRate: "18",
    items: [
      {
        itemDescription: "Software Development Services",
        amount: 225000,
        qty: 0,
      },
      {
        itemDescription: "Hosting Charge",
        amount: 22000,
        qty: 0,
      },
    ],
    currency: "INR",
  },
};
export default DemoPreview;
