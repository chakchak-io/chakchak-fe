import React from "react";
import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  placeHolder?: string;
  label?: string;
  type?: "email" | "password" | "text";
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
      <Input
        className={`peer rounded-[6px] placeholder:text-[16px] placeholder:font-medium placeholder:text-gray-300 invalid:outline-danger invalid:focus-visible:outline-danger`}
        type={type}
        placeholder={placeHolder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        required={required}
        autoComplete="on"
      />
      <p
        className={`invisible peer-invalid:visible text-[14px] text-medium leading-[18px] text-danger`}
      >
        올바른 이메일 형식을 입력해주세요.
      </p>
    </div>
  );
};

export default FancyInput;
