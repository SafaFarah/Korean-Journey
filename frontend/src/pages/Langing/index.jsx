import { Helmet } from "react-helmet";
import { Button, Img } from "../../components";
import LandingStackjisookone from "./LandingStackjisookone";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Safa&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-0.5 overflow-x-scroll bg-blue-300">
        <div className="container-xs mt-6 md:px-5">
          <header className="flex items-start justify-between gap-5 sm:flex-col">
            <a href="https://www.youtube.com/embed/bv8FXks0zsI" target="_blank">
              <Img
                src="images/img_header_logo.png"
                alt="Headerlogo"
                className="h-[120px] w-[280px] self-center object-contain"
              />
            </a>
            <Button
              size="md"
              shape="round"
              className="mt-3 min-w-[150px] rounded-[10px] !border-4 px-[22px] font-medium sm:px-5"
            >
              Login
            </Button>
          </header>
        </div>
        <div className="h-[876px] self-stretch bg-[url(/public/images/img_group_9.png)] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
          <LandingStackjisookone />
        </div>
      </div>
    </>
  );
}
