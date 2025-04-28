import React from 'react';
import { Link } from 'react-router-dom';

const ServicesTwo = ({ services }) => {
    return (
        <section className="services-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">LATEST SERVICE</span>
                    </div>
                    <h2 className="section-title__title">
                        Your supply chain partner <br /> the for success
                    </h2>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div
                            className={`col-xl-4 col-lg-4 wow ${service.animation}`}
                            data-wow-delay={`${(index + 1) * 100}ms`}
                            key={index}
                        >
                            <div className="services-two__single">
                                <div className="services-two__icon">
                                    <span className={`icon-${service.icon}`} />
                                </div>
                                <h3 className="services-two__title">
                                    <Link to={service.link}>{service.title}</Link>
                                </h3>
                                <p className="services-two__text">{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesTwo;
