import React from 'react';
import { Link } from 'react-router-dom';
import AboutCard from './AboutCard ';
import CounterUp from 'react-countup'; // Make sure you have this installed
import aboutImage from '../../assets/images/shapes/about-one-shape-1.png';
import aboutImg1 from '../../assets/images/resources/about-one-img-1.jpg';
import aboutImg2 from '../../assets/images/resources/about-one-img-2.jpg';

const AboutOne = ({
    className = "about-one about-two",
    tagline = "About Us",
    title = "Seamless logistics for your business needs",
    description = "Construction is an essential industry that involves building and designing structures such as buildings, roads, and bridges",
    listItems = [
        {
            iconClass: "icon-conveyor-1",
            title: "Delivering success through logistics",
        },
        {
            iconClass: "icon-clock",
            title: "Logistics expertise for your competitive edge",
        },
        {
            iconClass: "icon-fragile",
            title: "Streamlining supply chain processes",
        },
    ],
    images = {
        shapeImage: aboutImage,
        photo1: aboutImg1,
        photo2: aboutImg2,
    },
    trustedCount = 6,
    trustedText = "Trusted Customer",
    linkTo = "/about",
    buttonText = "Read more",
    containerClass = "container",
    imgAltTexts = {
        photo1: "Construction site",
        photo2: "Construction equipment",
    },
}) => {
    return (
        <section className={className}>
            <div className={containerClass}>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">{tagline}</span>
                                </div>
                                <h2 className="section-title__title">
                                    {title.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h2>
                            </div>
                            <p className="about-one__text">{description}</p>
                            <div className="about-one__list-box">
                                <div className="about-one__shape-1">
                                    <img src={images.shapeImage} alt="Decorative shape" />
                                </div>
                                <ul className="about-one__list list-unstyled">
                                    {listItems.map((item, index) => (
                                        <li key={index}>
                                            <AboutCard
                                                iconClass={item.iconClass}
                                                title={item.title}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="about-one__btn-box">
                                <Link to={linkTo} className="thm-btn about-one__btn">
                                    {buttonText}
                                    <span />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-one__img-box">
                                <div className="about-one__img-1">
                                    <img src={images.photo1} alt={imgAltTexts.photo1} />
                                </div>
                                <div className="about-one__img-2">
                                    <img src={images.photo2} alt={imgAltTexts.photo2} />
                                </div>
                                <div className="about-one__trusted-box">
                                    <div className="about-one__trust-icon">
                                        <span className="icon-ionic-ios-people" />
                                    </div>
                                    <div className="about-one__trust-content">
                                        <div className="about-one__trust-count count-box">
                                            <h3 className="count-text">
                                                <CounterUp end={trustedCount} />
                                            </h3>
                                            <span>k</span>
                                            <span className="about-one__trust-plus">+</span>
                                        </div>
                                        <p className="about-one__trust-text">{trustedText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;
