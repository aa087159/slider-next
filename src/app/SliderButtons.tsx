import React from "react";
import { arrow, slides } from "./utils";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setSliderScrolling: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SliderButtons({
  activeIndex,
  setActiveIndex,
  setSliderScrolling,
}: Props) {
  return (
    <div className="slider-buttons flex items-center gap-2 ">
      <button
        type="button"
        className="disabled:bg-[#F8F8F8] transition hover:bg-black rounded-[50%] bg-[#dedededd] p-2 pl-[8.5px] "
        onClick={() => {
          if (activeIndex > 0) {
            setSliderScrolling(true);
            setActiveIndex((prev) => {
              return prev - 1;
            });
          }
        }}
        disabled={slides.length === 4 || activeIndex <= 0}
      >
        {arrow()}
      </button>
      <button
        type="button"
        className="disabled:bg-[#F8F8F8] transition hover:bg-black rounded-[50%] bg-[#dedededd] p-2 pl-[8.5px] rotate-180"
        onClick={() => {
          if (activeIndex < slides.length - 4) {
            setSliderScrolling(true);
            setActiveIndex((prev) => {
              return prev + 1;
            });
          }
        }}
        disabled={slides.length === 4 || activeIndex >= slides.length - 4}
      >
        {arrow()}
      </button>
    </div>
  );
}
