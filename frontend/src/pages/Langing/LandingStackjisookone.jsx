import { Button, Img } from "../../components";
import React from "react";

export default function LandingStackJisookone() {
  return (
    <div className="relative mb-1.5 h-[748px] px-[78px] md:px-5">
      <Img
        src="images/img_ji_sook_1.png"
        alt="Jisookone"
        className="absolute bottom-0 left-[5%] m-auto h-[360px] w-[28%] object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end gap-3.5 pl-14 pr-[184px] md:px-5">
        <div className="flex h-[606px] w-[80%] items-center justify-end gap-10 rounded-[30px] bg-[url(/public/images/img_landing_photo.png)] bg-cover bg-no-repeat md:h-auto md:w-full md:flex-col">
          <Img
            src="images/img_2.png"
            alt="Two"
            className="h-[650px] w-full rounded-[30px] object-cover"
          />
          <Img
            src="images/img_3.png"
            alt="Three"
            className="h-[650px] w-full rounded-[30px] object-cover"
          />
          <Img
            src="images/img_4.png"
            alt="Four"
            className="h-[650px] w-full rounded-[30px] object-cover"
          />
          <Img
            src="images/img_5.png"
            alt="Five"
            className="h-[650px] w-full rounded-[30px] object-cover"
          />
        </div>
        <Button
          size="2xl"
          className="mr-[180px] min-w-[410px] rounded-[30px] !border-4 bg-gradient px-[30px] font-extrabold !text-white-a700 md:mr-0 sm:px-5"
        >
          Start Journey
        </Button>
      </div>
    </div>
  );
}
