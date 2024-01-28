import React, { useCallback, useEffect, useRef, useState } from "react";
import { isTabletOrMobileQuery, slides } from "./utils";
import Slide from "./components/Slide";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  sliderScrolling: boolean;
  setSliderScrolling: React.Dispatch<React.SetStateAction<boolean>>;
};

function Slider({
  activeIndex,
  setActiveIndex,
  sliderScrolling,
  setSliderScrolling,
}: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isTabletOrMobile = useMediaQuery(isTabletOrMobileQuery);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gap = 12;

  useEffect(() => {
    if (sliderRef.current) {
      if (sliderScrolling) {
        sliderRef.current.scrollTo({
          left: (363 + gap) * activeIndex,
        });

        setSliderScrolling(false);
      }
    }
  }, [activeIndex, setSliderScrolling, sliderScrolling]);

  const scrollObserver = useCallback(() => {
    const slider = sliderRef.current;
    if (slider && isTabletOrMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !sliderScrolling) {
              const index = Array.from(slider.children).indexOf(entry.target);
              setActiveIndex(index);
            }
          });
        },
        {
          root: slider,
          rootMargin: "0px 20px 0px 20px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      if (slider) {
        Array.from(slider.children).forEach((child) => {
          observer.observe(child);
        });
      }
    }
  }, [isTabletOrMobile, setActiveIndex, sliderScrolling]);

  useEffect(() => {
    scrollObserver();
  }, [scrollObserver]);

  const actionStart = (e: React.MouseEvent) => {
    setIsDrag(true);
    if (sliderRef.current) {
      setStartX(e.pageX);

      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const actionMove = (e: React.MouseEvent) => {
    if (isDrag && sliderRef.current) {
      const x = e.pageX;
      const dist = x - startX;
      sliderRef.current.scrollLeft = scrollLeft - dist;

      //setActiveIndex(Math.floor(diff / (363 + gap)));
    }
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      style={{
        padding: isTabletOrMobile ? "5px 30px" : "5px",
      }}
      onMouseDown={actionStart}
      onMouseMove={actionMove}
      onMouseUp={() => setIsDrag(false)}
      // onTouchStart={actionStart}
      // onTouchMove={actionMove}
      // onTouchEnd={() => setIsDrag(false)}
    >
      {slides.map((slide, i) => (
        <Slide {...{ ...slide }} key={i} />
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Slider), { ssr: false });
