import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Payment Details</p>
    <CustomTextInput
      label="Bank name"
      placeholder="Equity Bank"
      variableName="bankName"
    />
    <CustomTextInput
      label="Account number"
      placeholder="1170123456789"
      variableName="accountNumber"
    />
    <CustomTextInput
      label="Account Name"
      placeholder="Wanjiru Otieno"
      variableName="accountName"
    />
    <CustomTextInput
      label="Branch"
      placeholder="Kimathi Street Branch"
      variableName="branch"
    />
    <CustomTextInput
      label="Routing number"
      placeholder="0804189592"
      variableName="routingCode"
    />
    <CustomNumberInput
      label="Swift code"
      placeholder="EQBLKENA"
      variableName="swiftCode"
    />
  </div>
);
