import React from "react";
import { TextFieldInput } from "@radix-ui/themes";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  placeHolder?: string;
  label?: string;
  type?: "email";
  required?: boolean;
}

const FancyInput = ({
  value,
  placeHolder,
  label,
  onChange,
  type,
  required,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label className="text-[14px] font-medium">{label}</label>
      <TextFieldInput
        value={value}
        size="3"
        placeholder={placeHolder}
        className="w-full invalid:outline invalid:outline-2 invalid:outline-danger"
        onChange={(event) => onChange(event.target.value)}
        type={type}
        required={required}
      />
    </div>
  );
};

export default FancyInput;
