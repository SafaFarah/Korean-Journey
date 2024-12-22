import React from "react";
import { Helmet } from "react-helmet";
import Heading, Button, Img from "../../components";
import LoginRow from "./LoginRow";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Safa&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-blue-300">
        <div
          className="relative h-[878px] bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat px-48 md:px-5"
        >
          <Img
            src="images/img_ji_sook_1.png"
            alt="Jisookone"
            className="absolute bottom-[-4%] right-[13%] m-auto h-[360px] w-[34%] object-contain"
          />
          <div
            className="absolute left-0 right-0 top-0 mx-auto w-[54%] rounded-[20px] border-2 border-solid border-white-a700_01 bg-blue_gray-100_19 px-[22px] py-7 sm:px-5"
          >
            <div className="mb-[52px] flex flex-col items-center">
              <a href="https://www.youtube.com/embed/bv8FxkbszZI" target="_blank">
                <Button
                  color="red_700_01"
                  size="xs"
                  variant="fill"
                  shape="square"
                  className="w-[44px] self-end"
                >
                  <img src="images/img_x.svg" alt="Close" />
                </Button>
              </a>
              <a
                href="Login"
                target="_blank"
                rel="noreferrer"
                className="mt-[18px] md:text-[38px] sm:text-[36px]"
              >
                <Heading size="headingxl" as="h2" className="text-[40px] font-bold text-blue-900_01">
                  Login
                </Heading>
              </a>
            </div>
          </div>
          <div className="mt-[78px] flex self-stretch px-14 py-3.5 md:px-5">
            <Heading
              as="h3"
              className="text-[28px] font-semibold text-blue-900_01 md:text-[28px] sm:text-[26px]"
            >
              Email
            </Heading>
          </div>
          <div className="mt-[34px] flex self-stretch py-3.5 pl-[60px] pr-14 md:px-5">
            <Heading
              as="h4"
              className="self-end text-[28px] font-semibold text-blue-900_01 md:text-[22px] sm:text-[26px]"
            >
              Password
            </Heading>
          </div>
          <a href="https://www.youtube.com/embed/bv8Fkx8szZI" target="_blank">
            <Button
              size="sm"
              className="mx-[52px] mt-[12px] self-stretch rounded-[10px] !border bg-gradient3 px-[33px] font-bold !text-white-a700_01 md:mx-0 sm:px-5"
            >
              Login
            </Button>
          </a>
          <div className="ml-[72px] mr-[66px] mt-5 flex flex-wrap justify-center gap-3 self-stretch md:mx-0">
            <Heading
              size="headingxs"
              as="h5"
              className="text-[24px] font-semibold text-indigo-700 md:text-[20px]"
            >
              Don’t have an account?
            </Heading>
            <a href="https://www.youtube.com/embed/bv8Fkx8szZI" target="_blank">
              <Heading
                size="headingxs"
                as="h6"
                className="text-[24px] font-bold text-blue-900_01 md:text-[20px]"
              >
                Register
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
