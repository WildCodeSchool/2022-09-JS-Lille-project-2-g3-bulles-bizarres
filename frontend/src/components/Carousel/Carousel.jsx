import { EffectCoverflow } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
/* eslint-enable import/no-unresolved */
import Card from "@components/Cards/Card";

import "./style.css";

export default function Carousel() {
  return (
    <Swiper
      className="carousel"
      modules={[EffectCoverflow]}
      slidesPerView={2}
      navigation
      grabCursor="true"
      centeredSlides="true"
      loop="true"
      coverflowEffect={{
        rotate: 30,
        stretch: 25,
        depth: 250,
      }}
      effect="coverflow"
    >
      <SwiperSlide>
        {({ isActive }) => <Card hoverable={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Card hoverable={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Card hoverable={isActive} />}
      </SwiperSlide>
    </Swiper>
  );
}
