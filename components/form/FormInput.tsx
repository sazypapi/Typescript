import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

import React from "react";

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
    
      <Label className="capitalize" htmlFor="name">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        className="shadow-gray-300 shadow-sm/30  "
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
