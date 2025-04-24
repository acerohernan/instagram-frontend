import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface IButtonProps extends React.PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...rest }: IButtonProps): React.ReactElement => {
  return (
    <button
      {...rest}
      className={classNames(
        "bg-[#0095f6] text-white text-sm font-medium w-full px-4 py-[7px] rounded-lg hover:bg-[#1877f2]",
        className,
      )}
    >
      {children}
    </button>
  );
};
