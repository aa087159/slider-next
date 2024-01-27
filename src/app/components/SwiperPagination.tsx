import React from "react";
import { slides } from "../utils";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function SwiperPagination({
  activeIndex,
  setActiveIndex,
}: Props) {
  return (
    <div className="flex gap-2 justify-center transition-all">
      {new Array(slides.length).fill(null).map((_, i) => (
        <span
          key={i}
          className={`pagination-indicator ${
            activeIndex === i ? "active" : ""
          }`}
          onClick={() => setActiveIndex(i)}
        ></span>
      ))}
    </div>
  );
}
