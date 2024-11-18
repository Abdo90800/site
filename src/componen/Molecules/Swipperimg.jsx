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
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-2.png`,
  `${mainbath}/img-swipper-5.png`,
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-2.png`,
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-2.png`,
  `${mainbath}/img-swipper-5.png`,
  `${mainbath}/img-swipper-4.png`,
  `${mainbath}/img-swipper-2.png`,
];

const Swipperimg = () => {
  return (
    <main className="container">
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="flex justify-center items-center"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {/* تحديد عرض وارتفاع ثابت للصورة */}
            <div className="w-[300px] h-[500px] overflow-hidden rounded-lg mx-auto">
              <Imgatom
                src={img}
                alt={`Image ${index + 1}`}
                width={300}
                height={500}
                className="object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
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
            <div className="text-center w-full " style={{ margin: "10px 0" }}>
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
