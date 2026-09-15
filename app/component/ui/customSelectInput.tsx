"use client";

import { Controller } from "react-hook-form";
import { getInitialValue } from "@/lib/getInitialValue";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = { label: string; value: string };

type CustomSelectInputProps = {
  label?: string;
  placeholder: string;
  variableName: string;
  options: Option[];
};

const CustomSelectInput = ({
  label,
  placeholder,
  variableName,
  options,
}: CustomSelectInputProps) => (
  <Controller
    render={({ field: { onChange, value } }) => (
      <div
        className={`flex items-center relative ${
          label ? "h-[52px]" : "h-[42px]"
        }`}
      >
        {label && (
          <label className="block text-sm font-medium leading-6 text-gray-900 whitespace-nowrap">
            {label}
          </label>
        )}
        <Select
          value={value || undefined}
          onValueChange={(updatedValue) => {
            localStorage.setItem(variableName, updatedValue);
            onChange(updatedValue);
          }}
        >
          <SelectTrigger className="h-auto w-full border-0 justify-end gap-1.5 px-0 py-1.5 text-right text-sm font-medium text-gray-900 shadow-none focus:ring-0">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 border-dashed"
          aria-hidden="true"
        />
      </div>
    )}
    name={variableName}
    defaultValue={getInitialValue(variableName)}
  />
);

export default CustomSelectInput;
