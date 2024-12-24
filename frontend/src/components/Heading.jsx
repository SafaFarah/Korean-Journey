import React from "react";

const sizes = {
  headingsxs: "text-[24px] font-semibold md:text-[22px]",
  headings: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",
  headingmd: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
  headinglg: "text-[48px] font-semibold md:text-[44px] sm:text-[38px]",
  headingxl: "text-[64px] font-bold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
