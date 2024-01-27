import { SlideDataType } from "./components/Slide";

export const arrow = () => {
  return (
    <svg
      width="25"
      height="25"
      version="1.1"
      className="arrow rotate-[-90deg]"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24.4 20.5"
      xmlSpace="preserve"
    >
      <defs>
        <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="3"></feOffset>
          <feGaussianBlur
            result="blurOut"
            in="offOut"
            stdDeviation="3"
          ></feGaussianBlur>
          <feFlood
            floodColor="#4E3939"
            floodOpacity="0.31"
            result="color"
          ></feFlood>
          <feComposite
            in="color"
            in2="blurOut"
            operator="in"
            result="shadow"
          ></feComposite>
          <feComposite
            in="SourceGraphic"
            in2="shadow"
            operator="over"
          ></feComposite>
        </filter>
      </defs>
      <g id="Path_52">
        <path
          className="st0 "
          d="M19.2,14.8c-0.3,0-0.5-0.1-0.7-0.3l-6.6-6.9l-6.6,6.9c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l7.4-7.7
	c0.2-0.2,0.4-0.3,0.7-0.3l0,0c0.3,0,0.5,0.1,0.7,0.3l7.4,7.7c0.4,0.4,0.4,1,0,1.4C19.7,14.7,19.4,14.8,19.2,14.8z"
        ></path>
      </g>
    </svg>
  );
};

export const slides: SlideDataType[] = [
  {
    title: "RDY Y60 001",
    is_prebuilt: true,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27296/gaming-pc-01-Y60-001-Main-400-.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
    descs: [
      "Windows 11 Home",
      "Intel® Core™ i9-13900KF CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 2499,
    discount_price: 2199,
    affirm_price: 107,
    shipping_date: new Date(2024, 4, 15),
  },
  {
    title: "Gaming RDY EMRRG213",
    is_prebuilt: true,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27073/Gaming-RDY-01-ECL-Pro-III-main-400.png?v=01902bd6d6ceb8f51168bc47d745486712a32c9d",
    descs: [
      "Windows 11 Home",
      "AMD Ryzen 5 7600 CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 1489,
    discount_price: 1249,
    affirm_price: 78,
    shipping_date: new Date(2024, 9, 5),
  },
  {
    title: "Gaming RDY ECL Pro III",
    is_prebuilt: false,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26901/gaming-pc-01-SLMRR213-main-400-.png?v=01902bd6d6ceb8f51168bc47d745486712a32c9d",
    descs: [
      "Windows 11 Home",
      "AMD Ryzen 5 7600 CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 1999,
    discount_price: 1499,
    affirm_price: 94,
    shipping_date: new Date(2024, 2, 9),
  },
  {
    title: "RDY Y60 001",
    is_prebuilt: false,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=256,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27296/gaming-pc-01-Y60-001-Main-400-.png?v=4b40891ee573dd07f741ecdace2a04136a55094f",
    descs: [
      "Windows 11 Home",
      "Intel® Core™ i9-13900KF CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 2499,
    discount_price: 2199,
    affirm_price: 107,
    shipping_date: new Date(2024, 0, 25),
  },
  {
    title: "Gaming RDY EMRRG213",
    is_prebuilt: true,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/27073/Gaming-RDY-01-ECL-Pro-III-main-400.png?v=01902bd6d6ceb8f51168bc47d745486712a32c9d",
    descs: [
      "Windows 11 Home",
      "AMD Ryzen 5 7600 CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 1489,
    discount_price: 1249,
    affirm_price: 78,
    shipping_date: new Date(2024, 0, 25),
  },
  {
    title: "Gaming RDY ECL Pro III",
    is_prebuilt: true,
    img_url:
      "https://content.ibuypower.com/cdn-cgi/image/width=640,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26901/gaming-pc-01-SLMRR213-main-400-.png?v=01902bd6d6ceb8f51168bc47d745486712a32c9d",
    descs: [
      "Windows 11 Home",
      "AMD Ryzen 5 7600 CPU",
      "GeForce RTX 4070 Ti - 12GB",
      "2TB M.2 NVMe SSD",
      "32GB DDR5-6000MHz RGB RAM",
    ],
    original_price: 1999,
    discount_price: 1499,
    affirm_price: 94,
    shipping_date: new Date(2024, 0, 25),
  },
];

export const article_landscape_max_width = 1150;
export const isTabletOrMobileQuery = {
  query: `(max-width: ${article_landscape_max_width}px)`,
};
