import { Img } from "../../components";
import React from "react";

export default function MedalsRowOne() {
  return (
    <div className="flex h-[876px] items-center justify-center self-stretch bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat py-[89px] md:h-auto md:py-5">
      <div className="container-xs mt-2.5 flex justify-center px-14 md:px-5">
        <div className="flex w-[94%] flex-col items-center justify-center rounded-[20px] border-2 border-solid border-white-a700_01 bg-blue_gray-100_b2 px-10 py-[68px] md:w-full md:py-5 sm:px-5">
          <div className="ml-3.5 mt-5 flex flex-col items-end self-stretch md:ml-0">
            <Img
              src="images/img_bronze_medal.png"
              alt="Bronzemedal"
              className="h-[169px] w-[18%] object-contain"
            />
            <div className="mr-[-46px] h-[2px] self-stretch bg-white-a700_01 md:mr-0" />
          </div>
          <Img
            src="images/img_silver_medal.png"
            alt="Silvermedal"
            className="mr-3.5 mt-[169px] h-[16%] self-end object-contain md:mr-0"
          />
          <div className="mr-3.5 mt-[-46px] h-[2px] self-stretch bg-white-a700_01 md:mx-0" />
          <Img
            src="images/img_gold_silver_and.png"
            alt="Goldsilverand"
            className="mr-3.5 mt-[169px] h-[16%] self-end object-contain md:mr-0"
          />
          <div className="mr-3.5 mt-[-46px] h-[2px] self-stretch bg-white-a700_01 md:mx-0" />
        </div>
      </div>
    </div>
  );
}
