import React from 'react';
import TestimonialSlider2 from '../../components/slider/TestimonialSlider2';

const Testimonial = () => {
    return (
        <>
            {/*Testimonial Two Start*/}
            <section className="testimonial-two">
                <div className="container">
                    <div className="testimonial-two__inner">
                        <TestimonialSlider2 />
                        <div className="testimonial-two__nav">
                            <div className="swiper-button-next1">
                                <i className="icon-angle-right" />
                            </div>
                            <div className="swiper-button-prev1">
                                <i className="icon-angle-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Testimonial Two End*/}
        </>
    );
};

export default Testimonial;
