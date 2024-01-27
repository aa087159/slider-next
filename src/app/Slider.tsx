import React, { useEffect, useRef, useState } from "react";
import { isTabletOrMobileQuery, slides } from "./utils";
import Slide from "./components/Slide";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

function Slider({ activeIndex, setActiveIndex }: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isTabletOrMobile = useMediaQuery(isTabletOrMobileQuery);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: (363 + 13) * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // useEffect(() => {

  // }, [])

  return (
    <div
      className="slider"
      ref={sliderRef}
      style={{
        padding: isTabletOrMobile ? "5px 30px" : "5px",
      }}
      onMouseDown={(e) => {
        setIsDrag(true);
        setStartX(e.pageX);
        if (sliderRef.current) {
          setScrollLeft(sliderRef.current.scrollLeft);
        }
      }}
      onMouseMove={(e) => {
        if (isDrag && sliderRef.current) {
          e.preventDefault();
          const x = e.pageX;
          const dist = x - startX;
          const diff = scrollLeft - dist;
          sliderRef.current.scrollLeft = diff;
          setActiveIndex(Math.floor(diff / (363 + 13)));
        }
      }}
      onMouseUp={() => {
        setIsDrag(false);
      }}
    >
      {slides.map((slide, i) => (
        <Slide {...{ ...slide }} key={i} />
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Slider), { ssr: false });
