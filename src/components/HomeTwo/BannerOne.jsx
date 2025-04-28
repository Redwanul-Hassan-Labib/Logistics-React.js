import React from 'react';
import { Link } from 'react-router-dom';
import subtitleicon from '../../assets/images/icon/banner-one-sub-title-icon.png'

const BannerOne = ({ 
    subTitle, 
    contactNumber, 
    image1, 
    image2, 
    readMoreLink, 
    backgroundImage 
}) => {
    return (
        <section className="banner-one">
            <div
                className="banner-one__shape-1 float-bob-y"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="banner-one__left wow fadeInLeft" data-wow-delay="300ms">
                            <div className="banner-one__sub-title-box">
                                <div className="banner-one__sub-title-icon">
                                    <img src={subtitleicon} alt="" />
                                </div>
                                <h5 className="banner-one__sub-title">{subTitle}</h5>
                            </div>
                            <h2 className="banner-one__title">
                            Transport Goods <br /> Priority{" "}
                            <span>
                                Logistics <br />
                                Simplified
                            </span>
                            </h2>

                            <div className="banner-one__btn-box">
                                <Link to={readMoreLink} className="thm-btn banner-one__btn">
                                    Read more <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="banner-one__right wow fadeInRight" data-wow-delay="400ms">
                            <div className="banner-one__img-box">
                                <div className="banner-one__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="banner-one__content">
                                    <div className="banner-one__call">
                                        <div className="banner-one__call-icon">
                                            <span className="icon-phone" />
                                        </div>
                                        <div className="banner-one__call-number">
                                            <p>Need help?</p>
                                            <h5>
                                                <Link to={`tel:${contactNumber}`}>{contactNumber}</Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-one__img-two">
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerOne;
