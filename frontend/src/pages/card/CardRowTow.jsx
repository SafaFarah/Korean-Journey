import { Img, Heading } from "../../components";
import React from "react";

export default function CardRowTwo() {
  return (
    <div className="flex h-[876px] items-center justify-center self-stretch bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat py-[162px] md:h-auto md:py-5">
      <div className="container-xs flex justify-center px-14 md:px-5">
        <div className="flex w-[32%] flex-col gap-8 rounded-[20px] bg-blue_gray_100 py-1.5 md:w-full">
          <div className="flex items-center justify-between gap-5">
            <Img
              src="images/img_shareit.svg"
              alt="Shareit"
              className="h-[58px] w-[20%] object-contain"
            />
            <Img
              src="images/img_flip.png"
              alt="Flip"
              className="h-[72px] w-[22%] object-contain"
            />
          </div>
          <Img
            src="images/img_1.png"
            alt="One"
            className="mx-3.5 h-[288px] object-cover md:mx-0"
          />
          <div className="ml-3.5 flex items-center md:ml-0">
            <Img
              src="images/img_star_1.svg"
              alt="Image"
              className="h-[64px] w-[18%] self-end border-[3px] border-solid border-black_900 object-contain"
            />
            <div className="flex flex-1 items-start justify-end gap-5">
              <Heading
                size="heading6"
                as="h1"
                className="text-[48px] font-semibold text-black_900 md:text-[48px] sm:text-[38px]"
              >
                어머니
              </Heading>
            </div>
          </div>
          <Img
            src="images/img_audio.png"
            alt="Audio"
            className="mt-[38px] h-[76px] w-[36%] self-end object-contain"
          />
        </div>
      </div>
    </div>
  );
}
