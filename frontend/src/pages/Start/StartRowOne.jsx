import { Button, Text, Img } from "../../components";
import React from "react";

export default function StartRowOne() {
  return (
    <div className="flex h-[876px] items-end justify-center self-stretch bg-[url(/public/images/img_group_150.png)] bg-cover bg-no-repeat py-14 md:h-auto md:py-5">
      <div className="container-xs mt-[23px] flex justify-center px-1.5 md:px-5">
        <div className="flex w-full items-center justify-end md:flex-col">
          <Img
            src="images/img_ji_sook_1.png"
            alt="jisookone"
            className="mb-[46px] h-[360px] w-[26%] self-end object-contain md:w-full"
          />
          <div className="relative ml-[-36px] flex w-[54%] flex-col items-start gap-[110px] md:ml-0 md:w-full md:gap-[82px] sm:gap-[55px]">
            <Text
              size="textxs"
              as="p"
              className="w-[34%] font-mogra text-[36px] font-normal leading-[180%] tracking-[-0.72px] text-gray-800 md:w-full md:text-[34px] sm:text-[32px]"
            >
              Hello, <br />
              I’m Ji Sook ,<br />
              your guide on a fun journey to Korea!
            </Text>
            <Button
              color="white_A700_7f"
              size="xl"
              variant="fill"
              shape="round"
              className="min-w-[290px] self-end rounded-[10px] border-4 border-solid border-white_a700_01 font-librebaskerville font-bold"
            >
              Get Ready
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
