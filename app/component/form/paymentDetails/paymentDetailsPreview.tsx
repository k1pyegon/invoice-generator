import { currencyList } from "@/lib/currency";
import { ChevronDown } from "lucide-react";

const PreviewRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) => (
  <div className="mb-2 grid grid-cols-2 items-center gap-2">
    <p className="truncate text-xs font-medium text-gray-500">{label}</p>
    {value ? (
      <p className="flex truncate text-xs font-medium text-gray-600">
        {value}
      </p>
    ) : (
      <div className="rounded-[3.5px] bg-neutral-100 h-4 w-full animate-pulse" />
    )}
  </div>
);

export const PaymentDetailsPreview: React.FC<
  PaymentDetails & { onClick?: (step: string) => void }
> = ({
  bankName,
  accountNumber,
  accountName,
  routingCode,
  swiftCode,
  bankBranch,
  mobileMoneyProvider,
  mobileMoneyType,
  mobileMoneyNumber,
  mobileMoneyAccountNumber,
  mobileMoneyName,
  currency = "USD",
  onClick,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetails) =>
      currencyDetails.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  const bankRows = [
    { label: "Bank Name", value: bankName },
    { label: "Account Number", value: accountNumber },
    { label: "Account Name", value: accountName },
    { label: "Swift Code", value: swiftCode },
    { label: "Bank Branch", value: bankBranch },
    { label: "Routing Code", value: routingCode },
  ].filter((row) => !!row.value);

  const mobileMoneyRows =
    mobileMoneyProvider && mobileMoneyType && mobileMoneyNumber
      ? [
          {
            label: `${mobileMoneyProvider} ${mobileMoneyType}`,
            value: mobileMoneyNumber,
          },
          {
            label: "Account Number",
            value:
              mobileMoneyType === "Paybill" ? mobileMoneyAccountNumber : "",
          },
          { label: "Name", value: mobileMoneyName },
        ].filter((row) => !!row.value)
      : [];

  const sections = [
    { title: "Bank Details", rows: bankRows },
    { title: "Mobile Money", rows: mobileMoneyRows },
  ].filter((section) => section.rows.length > 0);

  // Nothing entered yet: show placeholder bank rows so the section is visible.
  const placeholderRows = ["Bank Name", "Account Number", "Account Name"];

  return (
    <div
      className={`grid ${
        sections.length > 1 ? "grid-cols-3" : "grid-cols-2"
      } group cursor-pointer relative`}
      onClick={() => onClick && onClick("4")}
    >
      {!!onClick && (
        <>
          <ChevronDown className="animate-pulse w-5 h-5 text-green-700 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-green-700 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-green-700 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
          <ChevronDown className="animate-pulse w-5 h-5 text-green-700 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
        </>
      )}
      {sections.length === 0 && (
        <div className="py-4 pl-10 pr-3">
          <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
            Payment Details
          </p>
          <div className="space-y-1">
            {placeholderRows.map((label) => (
              <PreviewRow key={label} label={label} />
            ))}
          </div>
        </div>
      )}
      {sections.map((section, index) => (
        <div
          key={section.title}
          className={`py-4 pr-3 ${index === 0 ? "pl-10" : "pl-4"}`}
        >
          <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
            {section.title}
          </p>
          <div className="space-y-1">
            {section.rows.map((row) => (
              <PreviewRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        </div>
      ))}
      <div className={`py-4 ${sections.length > 1 ? "pl-4 pr-10" : "px-10"}`}>
        <p className="text-[11px] text-neutral-400 font-medium uppercase mb-3">
          Payable in
        </p>
        {currencyDetails && (
          <div className="flex gap-2 justify-between items-center w-full">
            <div className="flex gap-3 items-center">
              <currencyDetails.icon className="w-8 h-8 rounded-full shrink-0" />
              <div>
                <p className="font-medium text-sm">
                  {currencyDetails.currencyName}
                </p>
                <p className="text-xxs text-neutral-400">
                  {currencyDetails.currencySymbol}{" "}
                  {currencyDetails.currencyShortForm}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
