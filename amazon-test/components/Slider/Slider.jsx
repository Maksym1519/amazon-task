import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "./Slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slidesData from "../../data/slidesData.json";
import SliderCard from "../SliderCard/SliderCard";

const Slider = ({
  slidesPerView = 3,
  spaceBetween = 12,
  pagination = { clickable: true },
  autoplay = false,
  className = "",
  slideClassName = "",
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={`slider-container ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: pagination.clickable,
        }}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        onSwiper={handleSwiperInit}
        onSlideChange={handleSlideChange}
        className="swiper"
      >
        {slidesData.slides.map((slide, index) => (
          <SwiperSlide key={index} className={`slide ${slideClassName}`}>
            <SliderCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination"></div>

      <svg
        className={`custom-prev-btn ${isBeginning ? "disabled" : ""}`}
      >
        <use href="sprite.svg#btn-prev"></use>
      </svg>

      <svg
        className={`custom-next-btn ${isEnd ? "disabled" : ""}`}
      >
        <use href="sprite.svg#btn-next"></use>
      </svg>
    </div>
  );
};

export default Slider;
