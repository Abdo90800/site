"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Imgatom from "../Atoms/Imgatom";
import Text from "../Atoms/Text";

const mainbath = "/images/imgswipper";
const images = [
  `${mainbath}/img-swipper-1.png`,
  `${mainbath}/img-swipper-2.png`,
  `${mainbath}/img-swipper-3.png`,
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-5.png`,
  `${mainbath}/img-swipper-1.png`,
  `${mainbath}/img-swipper-2.png`,
  `${mainbath}/img-swipper-3.png`,
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-5.png`,
];

const Swipperimg = () => {
  return (
    <main className="container overflow-hidden mx-auto">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-[18.52px] w-[151px] h-[326.97px] md:w-[170px] md:h-[350px] lg:w-[290px] lg:h-[653.93px] overflow-hidden ">
              <Imgatom
                src={img}
                alt={`Image ${index + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* النص والزر */}
      <div className="max-w-fit mx-auto flex flex-col justify-center items-center p-4 space-y-4 flex-wrap">
        <Text
          text={
            <div className="w-full my-[10px]">
              <p>Coming Soon...</p>
              <p>
                <strong style={{ fontWeight: "bold" }}>”Dashboard”</strong> to
                view and control your business
              </p>
            </div>
          }
          className="w-full text-base md:text-2xl md:leading-9 md:my-[10px] text-center font-normal text-black"
        />
        <button className="w-[375px] mx-auto px-4 md:w-auto h-[48px] bg-[#121212] rounded-xl text-white">
          Join our waiting list
        </button>
      </div>
    </main>
  );
};

export default Swipperimg;
