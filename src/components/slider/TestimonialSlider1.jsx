import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonialImg1 from '../../assets/images/testimonial/testimonial-1-1.jpg';
import testimonialImg2 from '../../assets/images/testimonial/testimonial-1-2.jpg';
import testimonialImg3 from '../../assets/images/testimonial/testimonial-1-3.jpg';
import testimonialImg4 from '../../assets/images/testimonial/testimonial-1-4.jpg';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    loop: true,
    pagination: {
        el: '.swiper-dot-style1',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    autoplay: { delay: 9000 },
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
            slidesPerView: 1,
        },
        1200: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
        1320: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
};

export default function TestimonialSlider1() {
    return (
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        <img src={testimonialImg1} alt="Testimonial from Nafiz Bhuiyan" />
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Nafiz Bhuiyan
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Manager
                    </p>
                    <p className="testimonial-one__text">
                        Logistic service involves the planning implementation and control of the efficient and effective movement and storage of goods and materials.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        <img src={testimonialImg2} alt="Testimonial from Robert Son" />
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Robert Son
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Manager
                    </p>
                    <p className="testimonial-one__text">
                        Logistic service involves the planning implementation and control of the efficient and effective movement and storage of goods and materials.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        <img src={testimonialImg3} alt="Testimonial from Harbert Spin" />
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Harbert Spin
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Manager
                    </p>
                    <p className="testimonial-one__text">
                        Logistic service involves the planning implementation and control of the efficient and effective movement and storage of goods and materials.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="testimonial-one__single">
                    <div className="testimonial-one__quote">
                        <span className="icon-quote" />
                    </div>
                    <div className="testimonial-one__client-img">
                        <img src={testimonialImg4} alt="Testimonial from Mainto Vula" />
                    </div>
                    <div className="testimonial-one__ratting">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star last-star" />
                    </div>
                    <h3 className="testimonial-one__client-name">
                        Mainto Vula
                    </h3>
                    <p className="testimonial-one__client-sub-title">
                        Manager
                    </p>
                    <p className="testimonial-one__text">
                        Logistic service involves the planning implementation and control of the efficient and effective movement and storage of goods and materials.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
