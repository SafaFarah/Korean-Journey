import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};

const variants = {
  fill: {
    white_A700_7f: "bg-white-a700_7f text-pink-600",
    red_700_01: "bg-red-700_01",
  },
  outline: {
    white_A700_01: "border-white-a700_01 border-4 border-solid text-blue-900_01",
  },
};

const sizes = {
  xl: "h-[94px] pl-[34px] pr-5 text-[40px]",
  md: "h-[72px] px-[26px] text-[36px]",
  "2xl": "h-[98px] px-[34px] text-[40px]",
  "3xl": "h-[150px]",
  xxs: "h-[40px]",
  sm: "h-[60px] px-[34px] text-[32px]",
  lg: "h-[74px] px-[34px] text-[40px]",
};
const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "outline",
    size = "lg",
    color = "white_A700_01",
    ...restProps
  }) => {
    return (
      <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
          shape && shapes[shape]
        } ${size && sizes[size]} ${variant && variants[variant][color]}`}
        {...restProps}
      >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </button>
    );
  };
  
  Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xl", "md", "2xl", "xs", "sm", "lg"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["white_A700_7f", "red_700_01", "white_A700_01"]),
  };
  
  export { Button };
  