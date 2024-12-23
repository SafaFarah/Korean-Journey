import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import SignupRow from "./SignupRow";
import React from "react";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Safaa's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue-300">
        <SignupRow />
        <div
          className="relative h-[876px] bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-48 py-3 md:px-5"
        >
          <div
            className="absolute left-0 right-0 top-[13px] mx-auto flex w-[54%] flex-col items-center rounded-[20px] border-2 border-solid border-white-a700_01 bg-blue_gray-100_19 p-3.5"
          >
            <a
              href="https://www.youtube.com/embed/bvPFkxo5ZZI"
              target="_blank"
            >
              <Button
                color="red_700_01"
                size="xs"
                variant="fill"
                shape="square"
                className="w-[44px] self-end"
              >
                <Img src="images/img_x.svg" />
              </Button>
            </a>
            <Heading
              size="heading2"
              as="h2"
              className="mt-4 text-[40px] font-bold text-blue-900_01 md:text-[38px] sm:text-[36px]"
            >
              Sign up
            </Heading>
            <div
              className="ml-[-26px] mr-[-22px] mt-10 flex self-stretch p-3.5 md:mx-0"
            >
              <Heading
                as="h3"
                className="self-end text-[30px] font-semibold text-blue-900_01 md:text-[28px] sm:text-[26px]"
              >
                Name
              </Heading>
            </div>
            <div
              className="ml-[-26px] mr-[-22px] mt-[-30px] flex self-stretch p-3.5 md:mx-0"
            >
              <Heading
                as="h4"
                className="text-[30px] font-semibold text-blue-900_01 md:text-[28px] sm:text-[26px]"
              >
                Email
              </Heading>
              </div>
  <div className="ml-[-26px] mr-[-22px] mt-5 flex self-stretch p-3.5 md:mx-0">
    <Heading
      as="h5"
      className="self-end text-[30px] font-semibold text-blue-900_01 md:text-[28px] sm:text-[26px]"
    >
      Password
    </Heading>
  </div>
  <div className="mx-[-52px] mb-[-62px] mt-11 self-stretch md:mx-0">
    <div className="flex flex-col gap-[18px]">
      <a href="https://www.youtube.com/embed/bv8Fkx0szZI" target="_blank">
        <Button
          size="sm"
          className="self-stretch rounded-[20px] !border bg-gradient3 px-[32px] font-bold !text-white-a700_01 sm:px-5"
        >
          Sign up
        </Button>
      </a>
      <div className="ml-[-18px] mr-10 flex flex-wrap justify-center gap-2.5 md:mx-0">
        <Heading
          size="headingxs"
          as="h6"
          className="text-[24px] font-semibold text-indigo-700 md:text-[22px]"
        >
          Already have an account ?
        </Heading>
        <a href="https://www.youtube.com/embed/bv8Fkx0szZI" target="_blank">
          <Heading
            size="headingxs"
            as="h4"
            className="text-[24px] font-bold text-blue-900_01"
          >
            Login
          </Heading>
        </a>
      </div>
    </div>
  </div>
</div>
<img
  src="images/img_ji_sook_1.png"
  alt="jisooktwo"
  className="absolute bottom-[-17px] right-[-13%] m-auto h-[360px] w-[34%] object-contain"
/>
</div>
</div>
</>
  );
}
