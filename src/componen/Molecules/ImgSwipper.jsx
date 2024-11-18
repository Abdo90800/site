// components/organisms/CardsSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "../Atoms/Image";
const mainpath = "/images/imgswipper";
const ImgsArray = [
  `${mainpath}/img-swipper-1.png`,
  `${mainpath}/img-swipper-2.png`,
  `${mainpath}/img-swipper-3.png`,
  `${mainpath}/img-swipper-4.png`,
  `${mainpath}/img-swipper-5.png`,
];
const ImgSwipper = ({ cardsData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
      className="max-w-screen-xl mx-auto px-2"
    >
      {ImgsArray.map((img, index) => {
        <SwiperSlide key={index}>
          <Image img={img} />
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ImgSwipper;
