import React, { } from 'react';
import ServiceSlider from '../../components/slider/ServiceSlider';



const ServicesCarouselMain = () => {
    

    return (
        <React.Fragment>
            {/*Services Carousel Page Start*/}
            <section className="services-carousel-page">
                <div className="container">
                <div className="team-one__top">
                    <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">LATEST SERVICE</span>
                    </div>
                    <h2 className="section-title__title">
                        Your Supply Chain Partner <br />
                        For Success
                    </h2>
                    </div>
                    <div className="team-one__nav">
                    <div className="swiper-button-next1">
                        <i className="icon-arrow-left" />
                    </div>
                    <div className="swiper-button-prev1">
                        <i className="icon-arrow-right" />
                    </div>
                    </div>
                </div>
                <div className="team-one__bottom">
                    
                    <ServiceSlider/>

                </div>
                </div>
            </section>
            {/*Services Carousel Page End*/}
        </React.Fragment>
    );
};

export default ServicesCarouselMain;
