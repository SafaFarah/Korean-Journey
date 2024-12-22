import { Helmet } from "react-helmet";
import { Button, Img } from "../../components";
import StartRowOne from "../StartRowOne";
import React from "react";

export default function StartPage() {
  return (
    <>
      <Helmet>
        <title>Safa&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center overflow-x-scroll bg-blue-300 shadow-xs">
        <div className="container-xs mt-6 md:px-5">
          <header className="flex items-start justify-between gap-5 sm:flex-col">
            <Img
              src="images/img_header_logo.png"
              alt="Headerlogo"
              className="h-[124px] w-[308px] self-center object-contain"
            />
            <Button
              shape="round"
              className="mt-2.5 min-w-[190px] rounded-[10px] !border-4 px-[30px] font-bold sm:px-5"
            >
              Login
            </Button>
          </header>
        </div>
      </div>
      <StartRowOne />
    </>
  );
}
