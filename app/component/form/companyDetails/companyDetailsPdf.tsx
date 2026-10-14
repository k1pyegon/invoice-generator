"use client";
import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { pdfContainers, pdfTypography } from "@/lib/pdfStyles";

export const CompanyDetailsPdf: React.FC<CompanyDetails> = ({
  email,
  companyName,
  companyAddress,
  companyCity,
  companyState,
  companyCountry,
  companyTaxId,
  companyZip,
}) => (
  <View style={pdfContainers.CompanyDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>To</Text>
    {companyName && (
      <Text
        hyphenationCallback={(word) => [word]}
        style={{ ...pdfTypography.businessName, flexWrap: "wrap" }}>
        {companyName}
      </Text>
    )}
    {email && (
      <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
        {email}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {companyAddress && <Text>{companyAddress}</Text>}
      {(companyCity || companyState || companyZip) && (
        <Text style={{ marginBottom: 2 }}>
          {companyCity}, {companyState} {companyZip}
        </Text>
      )}
      {companyCountry && (
        <Text style={{ marginBottom: 4 }}>{companyCountry}</Text>
      )}
      {companyTaxId && <Text>Tax ID: {companyTaxId}</Text>}
    </View>
  </View>
);
