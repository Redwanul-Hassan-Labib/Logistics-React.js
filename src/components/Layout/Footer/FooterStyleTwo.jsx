import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for React Router

// Import the image directly
import footertwoshape from '../../../assets/images/shapes/site-footer-two-shape-1.png'; // Adjust path as necessary

const FooterStyleTwo = ({
    newsletterUrl,
    logoSrc,
    aboutText,
    socialLinks,
    services,
    contactInfo,
    bottomMenu,
    copyrightText
}) => {
    return (
        <>
            {/*Site Footer Start*/}
            <footer className="site-footer-two">
                <div className="site-footer-two__shape-1">
                    <img src={footertwoshape} alt="Footer Shape" />
                </div>
                <div className="container">
                    <div className="site-footer-two__top">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="site-footer-two__top-left">
                                    <h3 className="site-footer-two__top-title">
                                        Have a <span>project</span> in mind?
                                    </h3>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="site-footer-two__top-right">
                                    <form
                                        className="footer-widget-two__newsletter-form mc-form"
                                        data-url={newsletterUrl}
                                        noValidate="novalidate"
                                    >
                                        <div className="footer-widget-two__newsletter-form-input-box">
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                name="EMAIL"
                                            />
                                            <button
                                                type="submit"
                                                className="footer-widget-two__newsletter-btn thm-btn"
                                            >
                                                Subscribe Now
                                                <span />
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mc-form__response" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer-two__middle">
                        <div className="row">
                            <div
                                className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay="100ms"
                            >
                                <div className="footer-widget-two__column footer-widget-two__about">
                                    <div className="footer-widget-two__logo">
                                        <Link to="/">
                                            <img src={logoSrc} alt="Footer Logo" />
                                        </Link>
                                    </div>
                                    <p className="footer-widget-two__text">
                                        {aboutText}
                                    </p>
                                    <div className="footer-widget-two__social">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                className={`icon-${link.icon}`}
                                                aria-label={`Follow us on ${link.icon}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay="200ms"
                            >
                                <div className="footer-widget__column footer-widget-two__services">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Services</h3>
                                    </div>
                                    <ul className="footer-widget-two__services-list list-unstyled">
                                        {services.map((service, index) => (
                                            <li key={index}>
                                                <Link to={service.link}>
                                                    <span className="icon-angle-left" />
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay="300ms"
                            >
                                <div className="footer-widget-two__column footer-widget-two__contact">
                                    <div className="footer-widget-two__title-box">
                                        <h3 className="footer-widget-two__title">Contact</h3>
                                    </div>
                                    <ul className="footer-widget-two__contact-list list-unstyled">
                                        {contactInfo.map((info, index) => (
                                            <li key={index}>
                                                <div className="icon">
                                                    <span className={`icon-${info.icon}`} />
                                                </div>
                                                <p>
                                                    {info.link ? (
                                                        <a href={info.link}>
                                                            {info.text}
                                                        </a>
                                                    ) : (
                                                        info.text
                                                    )}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="site-footer-two__bottom-inner">
                            <p className="site-footer-two__bottom-text">
                                {copyrightText}
                            </p>
                            <ul className="list-unstyled site-footer-two__bottom-menu">
                                {bottomMenu.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.link}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            {/*Site Footer End*/}
        </>
    );
};

export default FooterStyleTwo;
