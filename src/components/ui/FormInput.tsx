"use client";

import { useField } from "formik";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({ label, required = false, ...props }: FormInputProps) => {
  const [field, meta] = useField(props);

  return (
    <div className="space-y-2">
      <label className="block text-gray-600 text-sm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        {...field}
        {...props}
        className={`
          w-full px-4 py-2 rounded-lg border border-gray-200
          focus:outline-none focus:ring-2 focus:ring-[#00B2FF] focus:border-transparent
          ${meta.touched && meta.error ? "border-red-500" : ""}
          ${props.className || ""}
        `}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
