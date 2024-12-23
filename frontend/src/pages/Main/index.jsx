import { Helmet } from "react-helmet";
import { Img, Button } from "../../components";
import Header from "../../components/Header";
import React from "react";

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>Safar&#39;s Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-x-scroll bg-blue-300">
        <Header className="relative z-[13] bg-light_blue-400" />
        <div className="relative mt-[-10px] h-[382px] content-center overflow-x-scroll border-2 border-solid border-white-a700_01 bg-light_blue-400 md:h-auto">
          <div className="relative h-[382px] flex-1">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
              <div className="flex flex-col items-center">
                <div className="h-[1024px] self-stretch bg-[url(/public/images/img_group_32.png)] bg-cover bg-no-repeat px-1 py-2.5 md:h-auto">
                  <div className="mb-[142px] flex items-start md:flex-col">
                    <Img
                      src="images/img_ji_sook_1.png"
                      alt="Jisooktwo"
                      className="relative z-[2] mt-11 h-[360px] w-[22%] object-contain md:w-full"
                    />
                    <div className="relative ml-[-184px] flex-1 self-center md:ml-0 md:self-stretch">
                      <div className="mx-[228px] flex items-start justify-end md:mx-0 md:flex-col">
                        <div className="w-[18%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 py-2 md:w-full">
                          <Img
                            src="images/img_job.png"
                            alt="job"
                            className="h-[102px] w-full object-cover md:h-auto"
                          />
                          </div>
                          <div className="mb-[26px] flex w-[64%] items-start justify-end gap-[69px] md:w-full">
  <div className="mt-24 w-[32%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 py-3">
    <Img
      src="images/img_emotion.png"
      alt="Emotion"
      className="h-[96px] w-full object-cover md:h-auto"
    />
  </div>
  <div className="w-[32%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01">
    <Img
      src="images/img_family.png"
      alt="Family"
      className="h-[142px] w-full rounded-tl-[50%] rounded-tr-[50%] object-cover md:h-auto"
    />
  </div>
</div>
<div className="flex items-start md:flex-col">
  <div className="w-[80%] self-center md:w-full">
    <div className="relative z-[1] mx-[100px] flex items-start justify-end gap-[15px] md:mx-0 sm:flex-col sm:gap-5">
      <div className="mb-3 w-[22%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 sm:mb-0 sm:w-full">
        <Img
          src="images/img_vegetables.png"
          alt="Vegetables"
          className="mb-[18px] mr-1 h-[110px] w-full object-cover md:mr-0 md:h-auto"
        />
      </div>
      <Button size="3xl" shape="square" className="w-[154px] self-end">
        <Img src="images/img_group_163.png" />
      </Button>
    </div>
  </div>
</div>
<div className="relative mt-[-4px] flex items-start md:flex-col">
  <div className="relative mt-[39px] h-[150px] w-[20%] md:w-full">
  <div className="absolute bottom-0 left-3 top-0 my-auto h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01">
  <Img
    src="images/img_drinks.png"
    alt="Drinks"
    className="absolute bottom-[7px] left-0 m-auto h-[119px] w-[84%] object-contain"
  />
</div>
<div className="flex w-[34%] flex-col items-start gap-4 px-8 md:w-full sm:px-5">
  <div className="mr-1.5 w-[56%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 py-5 md:mr-0 md:w-full">
    <Img
      src="images/img_animal.png"
      alt="Animal"
      className="h-[78px] w-full object-cover md:h-auto"
    />
  </div>
  <div className="w-[56%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:w-full">
    <Img
      src="images/img_color.png"
      alt="Color"
      className="h-[124px] w-full object-cover md:h-auto"
    />
  </div>
</div>
<div className="mt-[58px] flex flex-1 flex-col items-start gap-[54px] self-end px-[38px] md:self-stretch sm:gap-[27px] sm:px-5">
  <div className="mr-24 w-[54%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:mr-0 md:w-full">
    <Img
      src="images/img_life.png"
      alt="Life"
      className="mb-4 h-[110px] w-full object-cover md:h-auto"
    />
  </div>
  <Img
    src="images/img_bronze_medal.png"
    alt="Bronzemedal"
    className="h-[169px] w-[54%] object-contain"
  />
  </div>
  </div>
  </div>
  <div className="mt-[-142px] w-[12%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 px-2 py-3.5 md:w-full">
  <Img
    src="images/img_fruit.png"
    alt="Fruit"
    className="mr-1 h-[92px] w-full object-cover md:mr-0 md:h-auto"
  />
</div>
<div className="container-xs relative z-[3] mt-[-148px] flex flex-col items-end pl-14 pr-[482px] md:px-5">
  <Img
    src="images/img_15&pix&spic221.png"
    alt="15Pix&Spic221"
    className="h-[354px] w-[54%] object-contain"
  />
</div>
<div className="relative z-[4] mt-[-54px] flex flex-col items-center">
  <div className="container-xs relative z-[5] flex flex-col items-end pl-14 pr-52 md:px-5">
    <div className="w-[12%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:w-full">
      <Img
        src="images/img_school.png"
        alt="School"
        className="mb-4 h-[120px] w-full object-cover md:h-auto"
      />
    </div>
  </div>
</div>
<div
  className="relative mt-[-142px] flex h-[1024px] items-center justify-center self-stretch bg-[url(/public/images/img_group_173.png)] bg-cover bg-no-repeat py-[98px] md:h-auto md:py-5"
>
  <div className="flex w-[94%] justify-center md:w-full">
    <div className="flex w-full items-center md:flex-col">
      <div className="flex flex-1 flex-col gap-2 px-14 md:self-stretch md:px-5">
        <div className="flex items-start justify-end md:mx-0 md:flex-col">
          <div className="mt-11 w-[16%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 py-1.5 md:w-full">
            <Img
              src="images/img_hospital.png"
              alt="Hospital"
              className="mb-2 h-[98px] w-full object-cover md:h-auto"
            />
</div>
<div className="w-[16%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 px-1.5 py-2.5 md:w-full">
  <Img
    src="images/img_clothes.png"
    alt="Clothes"
    className="h-[96px] w-full object-cover md:h-auto"
  />
</div>
<div className="flex w-[32%] flex-col items-start gap-10 self-center md:w-full">
  <div className="ml-8 w-[54%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 px-3 py-3.5 md:ml-0 md:w-full">
    <Img
      src="images/img_number.png"
      alt="Number"
      className="h-[90px] w-full object-cover md:h-auto"
    />
  </div>
  <div className="flex w-[48%] flex-col items-center self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:w-full">
    <Img
      src="images/img_food.png"
      alt="Food"
      className="mb-3.5 h-[116px] w-[56%] object-contain"
    />
  </div>
</div>
<div className="mr-9 flex items-start md:mr-0 md:flex-col">
  <div className="mt-9 h-[152px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
  <div className="flex flex-1 items-center justify-center md:flex-col md:self-stretch">
    <div className="mb-[126px] w-[18%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 p-2 md:w-full">
      <Img
        src="images/img_home.png"
        alt="Home"
        className="mb-3 h-[92px] w-full object-cover md:h-auto"
      />
    </div>
  </div>
</div>
<div className="flex w-[68%] flex-col items-end gap-16 md:w-full sm:gap-8">
  <div className="flex items-start justify-between md:self-stretch">
    <div className="mb-14 ml-[-34px] w-[30%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
  <Img
      src="images/img_restaurant.png"
      alt="Restaurant"
      className="mb-2 ml-1.5 h-[183px] w-full object-cover md:ml-0 md:h-auto"
    />
  </div>
  <div className="w-[30%] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 p-1">
    <img
      src="images/img_seasons.png"
      alt="Seasons"
      className="h-[110px] w-full object-cover md:h-auto"
    />
  </div>
  <div>
    <img
      src="images/img_silver_medal.png"
      alt="Silvermedal"
      className="mr-[-114px] h-[174px] w-[46%] object-contain md:mr-0"
    />
  </div>
  <div className="w-[12%] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:w-full">
    <img
      src="images/img_sport.png"
      alt="Sport"
      className="h-[122px] w-full object-cover md:h-auto"
    />
  </div>
</div>
<div className="relative z-[6] mt-[-130px] flex flex-col">
  <div className="flex flex-col items-center">
    <div className="container-xs relative z-[7] flex flex-col items-end pl-14 pr-[416px] md:px-5">
    <Img
  src="images/img_158picw58piczii.png"
  alt="158picw58piczii"
  className="w-[54%] object-contain"
/>
<div className="relative mt-[-28px] h-[1024px] self-stretch bg-[url(/public/images/img_group_173.png)] bg-cover bg-no-repeat px-[116px] py-[100px] md:p-5">
  <div className="absolute left-0 right-0 top-[10%] mx-auto flex flex-1 items-start justify-center px-14 md:px-5 sm:relative sm:flex-col">
    <div className="mb-32 mt-14 h-[152px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
    <div className="ml-2 h-[152px] w-[144px] self-end rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 sm:ml-0" />
    <div className="ml-1 h-[152px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 sm:ml-0" />
  </div>
  <div className="absolute right-[23%] top-[30%] m-auto h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
  <div className="absolute bottom-[13%] left-0 right-0 m-auto flex w-[52%] flex-col items-end gap-[46px]">
    <div className="h-[152px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
    <Img
      src="images/img_gold_silver_and.png"
      alt="Goldsilverand"
      className="mr-[-186px] w-[32%] object-contain md:mr-0"
/>
  </div>
  <div className="absolute bottom-[26%] left-0 right-0 mx-auto flex w-[84%] items-start sm:relative sm:flex-col">
    <div className="w-[52px] h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
    <div className="flex flex-1 flex-col items-start gap-[30px] self-center px-12 md:px-5 sm:self-stretch">
      <div className="ml-[126px] h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01 md:ml-0" />
      <div className="h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
    </div>
  </div>
</div>
<Img
  src="images/img_20_201604_south.png"
  alt="20201604south"
  className="relative z-[8] mt-[-42px] h-[384px] w-[14%] object-contain"
/>
<div className="absolute bottom-0 left-0 right-0 z-[9] mx-auto flex flex-1 flex-col items-center">
  <div className="container-xs relative z-[7] flex flex-col items-end pl-14 pr-[416px] md:px-5">
  <Img
  src="images/img_158picw58piczii.png"
  alt="158picw58piczii"
  className="h-[354px] w-[54%] object-contain"
/>
<Img
  src="images/img_learn_path_4.png"
  alt="Learnpathfour"
  className="relative mt-[-22px] h-[200px] w-full object-cover md:h-auto"
/>
<div className="absolute bottom-[34%] right-[18%] z-[11] m-auto h-[150px] w-[144px] rounded-[50%] border-[15px] border-solid border-gray-600 bg-white-a700_01" />
<Img
  src="images/img_ii_sok_1.png"
  alt="iisookthree"
  className="absolute bottom-5 left-[7%] z-[12] m-auto h-[360px] w-[26%] object-contain"
/>
</div>
</div>
</div>
</div>
</>
);
}