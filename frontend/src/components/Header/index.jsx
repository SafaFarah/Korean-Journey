import { Text, Img } from "../..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex md:flex-col justify-between items-start gap-5 px-[18px]`}>
      <Img
        src="images/img_header_logo.png"
        alt="HeaderLogo"
        className="h-[162px] w-[308px] self-center object-contain"
      />
      <div className="mr-4 mt-[22px] flex md:mr-0">
        <ul className="flex flex-wrap gap-[50px]">
          <li>
            <a href="#" className="md:text-[38px] sm:text-[36px]">
              <Text as="p" className="font-lemon text-[40px] font-normal text-white-a700_01">
                Track
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="md:text-[38px] sm:text-[36px]">
              <Text as="p" className="font-lemon text-[40px] font-normal text-white-a700_01">
                Favorite
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="md:text-[38px] sm:text-[36px]">
              <Text as="p" className="font-lemon text-[40px] font-normal text-white-a700_01">
                Medals
              </Text>
            </a>
          </li>
          <li>
          <a href="#" className="md:text-[38px] sm:text-[36px]">
  <Text as="p" className="font-lemon text-[40px] font-normal text-white-a700_01">
    Logout
  </Text>
</a>
</li>
        </ul>
      </div>
    </header>
  );
}