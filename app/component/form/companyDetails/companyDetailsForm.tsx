import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Company Details (To)</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. client@example.com"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the company.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder="Jambo Traders Ltd"
      variableName="companyName"
    />
    <ImageInput label="Logo" variableName="companyLogo" />
    <CustomTextInput
      label="Address"
      placeholder="Kimathi Street, 12"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Mombasa"
      variableName="companyCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Mombasa County"
      variableName="companyState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="80100"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="Kenya"
      variableName="companyCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="P051987654X"
      variableName="companyTaxId"
    />
  </div>
);
