"use client";
import React from "react";
import Slider from "./Slider";
import SliderButtons from "./SliderButtons";
import { useMediaQuery } from "react-responsive";
import { isTabletOrMobileQuery } from "./utils";
import dynamic from "next/dynamic";
import SwiperPagination from "./components/SwiperPagination";

type Props = {};

function SliderContainer({}: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isTabletOrMobile = useMediaQuery(isTabletOrMobileQuery);

  return (
    <div className="mx-auto max-w-[1500px] ">
      <div className="flex justify-between mb-5 px-5">
        <h1 className="text-xl font-bold md:text-2xl xl:text-3xl">
          Best Selling RDY Prebuilt Gaming PCs Deals
        </h1>
        {!isTabletOrMobile && (
          <SliderButtons
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        )}
      </div>
      <Slider activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {isTabletOrMobile && (
        <SwiperPagination
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      )}
    </div>
  );
}
export default dynamic(() => Promise.resolve(SliderContainer), { ssr: false });
