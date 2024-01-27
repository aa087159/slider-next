import React from "react";
import { format } from "date-fns";
import { isTabletOrMobileQuery } from "../utils";
import { useMediaQuery } from "react-responsive";

export interface SlideDataType {
  title: string;
  is_prebuilt: boolean;
  img_url: string;
  descs: string[];
  original_price: number;
  discount_price: number;
  affirm_price: number;
  shipping_date: Date;
}

type Props = {};

export default function Slide({
  title,
  is_prebuilt,
  img_url,
  descs,
  original_price,
  discount_price,
  affirm_price,
  shipping_date,
}: SlideDataType & Props) {
  const isTabletOrMobile = useMediaQuery(isTabletOrMobileQuery);
  return (
    <div
      className="slide shadow-md min-w-[363px]  rounded-lg"
      style={{
        scrollSnapAlign: isTabletOrMobile ? "center" : "unset",
        scrollSnapStop: isTabletOrMobile ? "always" : "unset",
      }}
    >
      <div className="relative bg-white flex flex-col justify-center gap-2 p-5 overflow-hidden whitespace-nowrap rounded-t-lg">
        <span className="absolute left-5 top-6 w-[70px]">
          <img
            alt={is_prebuilt ? "prebuild" : "custom"}
            loading="lazy"
            width="70"
            height="22"
            decoding="async"
            data-nimg="1"
            src={
              is_prebuilt ? "/svgs/prebuiltLabel.svg" : "/svgs/customLabel.svg"
            }
          />
        </span>
        <div className="relative flex justify-center mt-4">
          <img
            alt={title}
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            src={img_url}
          />
        </div>

        <a href="">
          <h4 className="font-bold text-slate-950 hover:text-red-500">
            {title}
          </h4>
        </a>

        <ul className="flex flex-col gap-2 overflow-hidden">
          {descs.map((desc, i) => (
            <li key={i} className="list-none text-xs text-slate-800">
              {desc}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#F2F6FA] p-5 rounded-b-lg flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-start">
          {discount_price !== original_price && (
            <span className="rounded-full bg-red-500 text-white text-xs px-2 py-1">
              SAVE ${original_price - discount_price}
            </span>
          )}
          <div className="flex gap-3 items-end">
            <p className="text-[20px] font-bold">${discount_price}</p>
            <p className="line-through text-xs text-zinc-400 relative bottom-1 ">
              ${original_price}
            </p>
          </div>
          <button className="relative">
            <p className="text-sm after:content-[url('/svgs/affirm.svg')] after:absolute after:top-[-10px] after:w-12">
              Starting at
              <span className="text-[#1694f5] "> ${affirm_price}/mo </span>with
            </p>
            {/* <img
              className="max-w-[50px]"
              src="/svgs/affirm.svg"
              height="300"
              width="423"
            /> */}
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-xs font-bold">Free Shipping</p>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
              Delivery By {format(shipping_date, "eeee, MMM d")}
            </span>
          </div>
          <button className="border rounded-full border-red-500 bg-transparent text-red-500 px-3 hover:bg-red-500 hover:text-white transition-all">
            {is_prebuilt ? "Buy Now" : "Customize"}
          </button>
        </div>
      </div>
    </div>
  );
}
