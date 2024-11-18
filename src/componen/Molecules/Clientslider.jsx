// components/organisms/CardsSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Clientslid from "../atoms/Clientslid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Clientslider = ({ cardsData }) => {
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
      {cardsData.map((product, index) => (
        <SwiperSlide key={index}>
          <CardComponent product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Clientslider;
