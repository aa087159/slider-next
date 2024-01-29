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
    const scroll = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: (363 + gap) * activeIndex,
        });
      }
    };

    if ((isTabletOrMobile && sliderScrolling) || !isTabletOrMobile) {
      scroll();
    }
  }, [activeIndex, isTabletOrMobile, sliderScrolling]);

  const observer = useCallback(() => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !sliderScrolling) {
            const index = Array.from(sliderRef.current!.children).indexOf(
              entry.target
            );
            setActiveIndex(index);
          }
        });
      },
      {
        root: sliderRef.current,
        threshold: 0.8,
      }
    );
  }, [setActiveIndex, sliderScrolling]);

  useEffect(() => {
    const observerInstance = observer();
    if (isTabletOrMobile && sliderRef.current) {
      Array.from(sliderRef.current.children).forEach((child) => {
        observerInstance.observe(child);
      });
    }

    return () => observerInstance.disconnect();
  }, [isTabletOrMobile, observer]);

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
      onScroll={() => {
        if (sliderRef.current) {
          if (sliderRef.current.scrollLeft - (363 + gap) * activeIndex === 17) {
            setSliderScrolling(false);
          }
        }
      }}
    >
      {slides.map((slide, i) => (
        <Slide {...{ ...slide }} key={i} />
      ))}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Slider), { ssr: false });
