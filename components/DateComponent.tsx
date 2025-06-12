import { KeyboardEvent, MouseEvent, useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";

export const DateComponent = ({
  selected,
  name,
  error,
  placeholder,
  onChange,
  format,
  minDate,
  maxDate,
  label,
  className,
  handleBlur,
  toolTip,
  tipMessage,
  ...rest
}: {
  selected: any;
  name: string;
  error?: boolean | string;
  placeholder: string;
  onChange: (
    date: Date[] | null,
    event?:
      | KeyboardEvent<HTMLElement>
      | MouseEvent<HTMLElement, MouseEvent<Element, MouseEvent>>
      | undefined
  ) => void;
  format: string;
  minDate?: Date;
  maxDate?: Date;
  label: string;
  className?: string;
  handleBlur?: () => void;
  toolTip?: boolean;
  tipMessage?: string;
}) => {
  const [focus, setFocus] = useState(false);
  const [showTip, setShowTip] = useState(false);
  return (
    <div className={`flex flex-col font-onest gap-y-1 ${className}`}>
      <div className="flex gap-x-3 items-center">
        <p className="text-[15px]">{label}</p>
        {toolTip ? (
          <div className="relative flex items-center gap-x-2 ml-4">
            <p className="text-[10px] text-primary">
              Why do we need your date of birth?
            </p>
            <div
              onMouseOver={() => setShowTip(true)}
              onMouseOut={() => setShowTip(false)}
              className="cursor-pointer"
            >
              <Image
                src="/icons/question.svg"
                alt="tip"
                width={16}
                height={16}
              />
            </div>
            {showTip && (
              <div
                className={`absolute bg-black z-30 text-white py-[5px] px-[10px] text-[11px] transition-all origin-bottom rounded-[5px] bottom-[110%] left-[100%] w-[200px] ${
                  showTip ? "scale-y-100" : "scale-y-0"
                }`}
              >
                {tipMessage}
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div
        className={`w-full h-12 flex items-center pl-5 rounded-[5px] ${
          error
            ? "border-red-500"
            : focus
            ? "border-primary"
            : selected
            ? "border-[#D6D3D3]"
            : "border-[#D6D3D3]"
        } border-[1px]`}
      >
        <DatePicker
          onBlur={() => {
            setFocus(false);
            if (handleBlur) handleBlur();
          }}
          onFocus={() => setFocus(true)}
          selectsMultiple={true}
          selected={selected}
          name={name}
          placeholderText={placeholder}
          onChange={(date, event) =>
            onChange(
              date,
              event as
                | KeyboardEvent<HTMLElement>
                | MouseEvent<HTMLElement, MouseEvent<Element, MouseEvent>>
                | undefined
            )
          }
          wrapperClassName="w-[90%]"
          className="h-full w-full outline-none placeholder:text-[#34343426] text-sm  z-[9999999999999999999999999999999999]"
          id={name}
          dateFormat={format}
          minDate={minDate}
          maxDate={maxDate}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={100}
          scrollableYearDropdown
          {...rest}
        />
        <Image
          src="/icons/calendar.svg"
          alt="calendar icon"
          width={24}
          height={24}
          className="ml-auto mr-5"
        />
      </div>
      {error && <p className="error">Date is required</p>}
    </div>
  );
};
