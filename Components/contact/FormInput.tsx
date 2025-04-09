import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className={`w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#565FA1] focus:border-transparent transition-all ${className}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;