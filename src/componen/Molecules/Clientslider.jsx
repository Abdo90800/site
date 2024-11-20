// components/organisms/CardsSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardComponent from "../atoms/Clientslid";

const Clientslider = ({ cardsData }) => {
  return (
    <div className="swiper-container-wrapper">
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
        className="swiper-container"
      >
        {cardsData.map((product, index) => (
          <SwiperSlide key={index}>
            <CardComponent product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination">
        {/* هنا يمكن إضافة أي عنصر خاص بالنقاط */}
      </div>
    </div>
  );
};

export default Clientslider;
