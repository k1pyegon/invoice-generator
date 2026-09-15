import Link from "next/link";
import { InvoiceHistoryList } from "./component/InvoiceHistoryList";

const InvoicesPage = () => (
  <div className="max-w-2xl mx-auto px-4 py-16">
    <div className="flex items-center justify-between pb-8">
      <h1 className="text-3xl font-semibold">Invoice History</h1>
      <Link href="/new" className="text-green-700 hover:underline">
        New invoice
      </Link>
    </div>
    <InvoiceHistoryList />
  </div>
);

export default InvoicesPage;
