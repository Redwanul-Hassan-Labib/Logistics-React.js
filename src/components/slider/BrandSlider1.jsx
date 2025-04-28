import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSliderImg1 from '../../assets/images/brand/brand-1-1.png';
import BrandSliderImg2 from '../../assets/images/brand/brand-1-2.png';
import BrandSliderImg3 from '../../assets/images/brand/brand-1-3.png';
import BrandSliderImg4 from '../../assets/images/brand/brand-1-4.png';
import BrandSliderImg5 from '../../assets/images/brand/brand-1-5.png';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 100,
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: "#brand-one__swiper-button-next",
    prevEl: "#brand-one__swiper-button-prev",
  },
  autoplay: { delay: 5000 },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 50,
      slidesPerView: 3,
    },
    991: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    1199: {
      spaceBetween: 100,
      slidesPerView: 5,
    },
  },
};

export default function BrandSlider1() {
  return (
    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg1} alt="Brand 1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg2} alt="Brand 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg3} alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg4} alt="Brand 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg5} alt="Brand 5" />
        </SwiperSlide>
        {/* Repeat slides as necessary */}
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg1} alt="Brand 1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg2} alt="Brand 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg3} alt="Brand 3" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg4} alt="Brand 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={BrandSliderImg5} alt="Brand 5" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
