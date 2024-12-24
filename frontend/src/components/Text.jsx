import React from "react";

const sizes = {
  textxs: "text-[36px] font-normal md:text-[34px] sm:text-[32px]",
  texts: "text-[40px] font-normal md:text-[38px] sm:text-[36px]",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-white-a700_01 font-lemon ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
