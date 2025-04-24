import classNames from "classnames";
import React, { ChangeEventHandler, InputHTMLAttributes, useCallback, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = ({ placeholder, value: defaultValue, ...rest }: ITextInputProps): React.ReactElement => {
  const [value, setValue] = useState(defaultValue);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <div
      className={classNames(
        "border-gray-300 border bg-[#fafafa] p-2  rounded-[3px] focus-within:border-gray-500 relative h-[41px]",
        value && "grid items-end pb-1",
      )}
    >
      <label
        className={classNames(
          " text-[#737373] absolute top-[50%] left-2",
          value ? "text-[10px] -translate-y-2.5" : "text-xs",
        )}
        style={{ transform: "translate(0%, -50%)", transition: "all ease-out .1s" }}
      >
        {placeholder}
      </label>
      <input
        {...rest}
        className={classNames("w-full relative z-10", value && "text-xs")}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
