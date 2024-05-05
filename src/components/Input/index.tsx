import React from "react";

interface IInput {
  placeholder?: string;
  type: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  onBlur: (value: React.FocusEvent<HTMLInputElement>) => void;
  name: string;
  error?: string;
}

const Input = ({
  placeholder,
  error,
  type,
  value,
  onChange,
  icon,
  name,
  onBlur,
}: IInput) => {
  return (
    <div>
      <label className="input input-bordered focus:border-none flex items-center gap-2">
        {icon}
        <input
          name={name}
          type={type}
          className="border-none grow placeholder:text-gray-500 text-gray-200"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
      {error && <p className="text-error text-sm w-full mt-2">{error}</p>}
    </div>
  );
};

export default Input;
