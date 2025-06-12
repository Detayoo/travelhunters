import { Field, ErrorMessage } from "formik";

export const TextField = ({
  name,
  placeholder,
  divClass,
  textClass,
  labelClass,
  borderClass,
  htmlFor,
  label,
  value,
  maxlength,
  disabled,
  error,
  onChange,
  onKeyDown,
  ...rest
}: {
  name: string;
  htmlFor: string;
  label?: any;
  value: any;
  error?: any;
  placeholder?: string;
  divClass?: string;
  textClass?: string;
  labelClass?: string;
  borderClass?: string;
  maxlength?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}) => (
  <div className={`${divClass}`}>
    <div className="flex gap-[5px] items-center mb-1">
      <label
        htmlFor={htmlFor}
        className={`text-[14px] flex justify-between items-center  ${labelClass}`}
      >
        {label}
      </label>

      <Field
        autoComplete="new-password"
        type="text"
        name={name}
        id={htmlFor}
        placeholder={placeholder}
        maxLength={maxlength}
        disabled={disabled}
        onKeyDown={onKeyDown}
        {...rest}
        className={`w-full h-12 rounded-[5px] px-5 py-1 text-[14px] focus:border-primary-yellow ${
          disabled ? " bg-slate-50" : "bg-white"
        }  placeholder:text-sm ${
          error
            ? "border-red-500"
            : value && !borderClass
            ? "border-primary-yellow"
            : `${borderClass ? borderClass : "border-border-gray"}`
        } border-[1px] focus:outline-none ${textClass}`}
      />

      <ErrorMessage name={name} className="error" component="p" />
    </div>
  </div>
);
