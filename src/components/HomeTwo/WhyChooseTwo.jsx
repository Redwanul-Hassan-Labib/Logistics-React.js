import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseTwo = ({ backgroundImage, phone, title, text, readMoreLink, sinceYear }) => {
    return (
        <section className="why-choose-two">
            <div
                className="why-choose-two__bg"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            >
                <div className="why-choose-two__need-help">
                    <div className="icon">
                        <span className="icon-phone" />
                    </div>
                    <div className="content">
                        <p>Need help?</p>
                        <h3>
                            <Link to={`tel:${phone}`}>{phone}</Link>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Why Choose us</span>
                                </div>
                                <h2 className="section-title__title">
                                    {title}
                                </h2>
                            </div>
                            <p className="why-choose-two__text">
                                {text}
                            </p>
                            <div className="why-choose-two__btn-box">
                                <Link to={readMoreLink} className="thm-btn why-choose-two__btn">
                                    Read more <span />
                                </Link>
                            </div>
                            <h3 className="why-choose-two__big-text">{sinceYear}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTwo;
