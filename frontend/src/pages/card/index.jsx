import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import CardRowTwo from "./CardRowTwo";
import React from "react";

export default function CardPage() {
  return (
    <>
      <Helmet>
        <title>Safa&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-blue-300">
        <div className="container-xs mt-[26px] md:px-5">
          <Header />
        </div>
        <CardRowTwo />
      </div>
    </>
  );
}
