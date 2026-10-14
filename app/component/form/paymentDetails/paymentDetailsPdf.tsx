/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography } from "@/lib/pdfStyles";

interface PaymentDetailsPdfProps extends PaymentDetails {
  countryImageUrl: string;
}

const PaymentRow = ({
  label,
  value,
  compact,
}: {
  label: string;
  value: string;
  compact: boolean;
}) => (
  <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
    <Text
      hyphenationCallback={(word) => [word]}
      style={{
        ...pdfTypography.paymentTitle,
        width: compact ? 88 : 110,
        paddingRight: 6,
        ...(compact && { fontSize: 10 }),
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        flex: 1,
        ...pdfTypography.itemDescription,
        ...(compact && { fontSize: 10 }),
      }}
    >
      {value}
    </Text>
  </View>
);

export const PaymentDetailsPdf: React.FC<PaymentDetailsPdfProps> = ({
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
  countryImageUrl,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
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

  // With both bank and mobile money, three columns sit side by side so the
  // payment block stays short enough to fit on the first page.
  const compact = sections.length > 1;
  const columnStyle = (index: number) => ({
    flex: 1,
    paddingLeft: index === 0 ? 40 : compact ? 16 : 40,
    paddingRight: compact ? 8 : 12,
    paddingVertical: 16,
    flexDirection: "column" as const,
  });

  return (
    <View wrap={false} style={{ display: "flex", flexDirection: "row" }}>
      {sections.map((section, index) => (
        <View key={section.title} style={columnStyle(index)}>
          <Text style={{ paddingBottom: 12, ...pdfTypography.title }}>
            {section.title}
          </Text>
          <View style={{ flexDirection: "column", gap: 5 }}>
            {section.rows.map((row) => (
              <PaymentRow
                key={row.label}
                label={row.label}
                value={row.value as string}
                compact={compact}
              />
            ))}
          </View>
        </View>
      ))}
      <View
        style={{
          ...columnStyle(sections.length),
          ...(compact && { flex: 0.8 }),
        }}
      >
        <Text style={{ ...pdfTypography.title, paddingBottom: 12 }}>
          Payable in
        </Text>
        {currencyDetails && (
          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <Image
              src={countryImageUrl}
              style={{
                width: 30,
                height: 30,
                flexShrink: 0,
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, fontWeight: "medium" }}>
                {currencyDetails.currencyName}
              </Text>
              <Text style={pdfTypography.title}>
                {currencyDetails.currencySymbol}{" "}
                {currencyDetails.currencyShortForm}
              </Text>
            </View>
          </View>
        )}
      </View>
      {sections.length === 0 && <View style={{ flex: 1 }} />}
    </View>
  );
};
