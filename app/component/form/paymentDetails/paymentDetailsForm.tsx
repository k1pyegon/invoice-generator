import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import CustomSelectInput from "@/app/component/ui/customSelectInput";

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
      label="Bank Branch"
      placeholder="Kimathi Street Branch"
      variableName="bankBranch"
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
    <p className="pb-2 pt-6 text-sm font-medium text-neutral-500">
      Mobile money (alternative)
    </p>
    <CustomSelectInput
      label="Provider"
      placeholder="Select provider"
      variableName="mobileMoneyProvider"
      options={[
        { label: "M-Pesa", value: "M-Pesa" },
        { label: "Airtel Money", value: "Airtel Money" },
      ]}
    />
    <CustomTextInput
      label="Paybill/Till/Phone"
      placeholder="0712 345678"
      variableName="mobileMoneyNumber"
    />
  </div>
);
