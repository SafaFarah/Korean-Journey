import { Button, Heading } from "../../components";
import React from "react";

export default function LoginRow() {
  return (
    <div className="mt-[-22px] flex justify-center">
      <div className="container-xs flex items-start justify-between gap-5 md:px-5 sm:flex-col">
        <a href="https://www.youtube.com/embed/bv8FXks0zsI" target="_blank">
          <div className="relative h-[120px] w-[22%] self-center border border-solid border-white_a700_01 sm:w-full">
            <Heading
              size="headingxl"
              as="h1"
              className="absolute left-0 top-0 m-auto bg-gradient1 bg-clip-text font-instrumentsans text-[64px] font-bold italic text-transparent md:text-[48px]"
            >
              Korea
            </Heading>
            <Heading
              size="headingxl"
              as="h2"
              className="absolute bottom-[-0.02px] right-[-11.01px] m-auto bg-gradient2 bg-clip-text font-instrumentsans text-[64px] font-bold italic text-transparent md:text-[48px]"
            >
              Journey
            </Heading>
          </div>
        </a>
        <Button
          shape="round"
          className="mt-2.5 min-w-[170px] rounded-[10px] !border-4 px-7 font-medium sm:px-5"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
