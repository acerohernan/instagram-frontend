import classNames from "classnames";
import React from "react";

export const Card = ({
  children,
  className,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): React.ReactElement => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center px-10 max-w-[350px] border border-white xs:border-[#dbdbdb]",
        className,
      )}
    >
      {children}
    </div>
  );
};
