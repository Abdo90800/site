"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Imgatom from "../Atoms/Imgatom";
import Text from "../Atoms/Text";
import Buttonn from "../Atoms/Buttonn";

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
        className="flex justify-center items-center mx-auto "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-[18.52px] w-[151px] h-[326.97px] md:w-[170px] md:h-[350px] lg:w-[302px] lg:h-[653.93px] overflow-hidden mx-auto">
              <Imgatom
                src={img}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-lg  "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* النص والزر */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          text={
            <div className="text-center w-full" style={{ margin: "10px 0" }}>
              <p>Coming Soon...</p>
              <p>
                <strong style={{ fontWeight: "bold" }}>”Dashboard”</strong> to
                view and control your business
              </p>
            </div>
          }
          style={{
            fontSize: "16px",
            fontWeight: "400",
            color: "black",
            lineHeight: "24px",
            textAlign: "center",
            margin: "10px 0",
            fontSize: "24px",
            lineHeight: "36px",
          }}
        />
        <Buttonn>Join our waiting list</Buttonn>
      </div>
    </main>
  );
};

export default Swipperimg;
