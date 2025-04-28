import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 2000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-prev1',
    prevEl: '.swiper-button-next1',
  },
  pagination: {
    el: '.swiper-dot-style1',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    375: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    575: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1320: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
};

export default function ServiceSlider() {
  return (
    <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-postbox" />
            </div>
            <h3 className="services-one__title">
              <Link to="/express-freight-solutions">
                Fast and reliable logistics the solutions
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/express-freight-solutions" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-customer-service" />
            </div>
            <h3 className="services-one__title">
              <Link to="/quick-move-logistics">
                Bridges Construction is an essen industry
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/quick-move-logistics" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-container" />
            </div>
            <h3 className="services-one__title">
              <Link to="/speedy-dispatch">
                That involves building adesig the a structures
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/speedy-dispatch" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-shipping" />
            </div>
            <h3 className="services-one__title">
              <Link to="/swift-supply-chain">
                Logistics expertise for your competitive advantage
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/swift-supply-chain" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-crane" />
            </div>
            <h3 className="services-one__title">
              <Link to="/on-point-distribution">
                Delivering success through the logistics
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/on-point-distribution" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-conveyor-1" />
            </div>
            <h3 className="services-one__title">
              <Link to="/express-freight-solutions">
                Simplifying your logistics the challenges
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/express-freight-solutions" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-postbox" />
            </div>
            <h3 className="services-one__title">
              <Link to="/quick-move-logistics">
                Efficiency at its best, with our logistics services
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/quick-move-logistics" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-clock" />
            </div>
            <h3 className="services-one__title">
              <Link to="/speedy-dispatch">
                Seamless logistics for your business needs
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/speedy-dispatch" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="services-carousel__single">
            <div className="services-one__icon">
              <span className="icon-fragile" />
            </div>
            <h3 className="services-one__title">
              <Link to="/swift-supply-chain">
                Your supply chain partner for the success
              </Link>
            </h3>
            <div className="services-one__btn-box">
              <Link to="/swift-supply-chain" className="thm-btn services-one__btn">
                Read more
                <span />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}
