import React from 'react';
import { Link } from 'react-router-dom';

// Import default images
import FooterShape1 from '../../../assets/images/shapes/footer-shape-1.png';
import footerLogo1 from '../../../assets/images/resources/footer-logo-1.png';

const Footer = ({
    footerLogo = footerLogo1,
    footerShape = FooterShape1,
    footerClass = 'site-footer',
    aboutText = "It is a long established fact that a reader Empowering Communities",
    contactInfo = [
        { icon: "icon-envolop email-icon", text: "debra.holt@example.com", link: "mailto:debra.holt@example.com" },
        { icon: "icon-location location-icon", text: "3891 Ranchview Dr. Richardson" },
        { icon: "icon-call phone-call", text: "01959701730", link: "tel:01959701730" }
    ],
    companyLinks = [
        { text: "About Us", link: "/about" },
        { text: "FAQ", link: "/faq" },
        { text: "Testimonial", link: "/testimonials" },
        { text: "Service", link: "/services" },
        { text: "Blog And News", link: "/blog" }
    ],
    services = [
        { name: "Express Freight Solutions", link: "/express-freight-solutions" },
        { name: "Rapid Delivery Services", link: "/speedy-dispatch" },
        { name: "Speedy Haulage", link: "/speedy-haulage" },
        { name: "Reliable Transporters", link: "/reliable-transporters" },
        { name: "Swift Ship Solutions", link: "/swift-ship-solutions" }
    ],
    newsletterUrl = "MC_FORM_URL",
    newsletterText = "Financial planners help people to gain knowledge about",
    bottomMenu = [
        { text: "Trams & Condition", link: "/about" },
        { text: "Privacy Policy", link: "/privacy-policy" },
        { text: "Contact Us", link: "/contact" }
    ],
    copyrightText = "© Yoursitename 2024 | All Rights Reserved"
}) => {
    return (
        <>
        {/*Site Footer Start*/}
        <footer className={footerClass}>
            <div className="site-footer__shape-1 float-bob-y">
                <img src={footerShape} alt="Footer Shape" />
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link to="/">
                                            <img src={footerLogo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <p className="footer-widget__about-text">
                                        {aboutText}
                                    </p>
                                    <ul className="footer-widget__about-contact list-unstyled">
                                        {contactInfo.map((info, index) => (
                                            <li key={index}>
                                                <div className="icon">
                                                    <span className={info.icon} />
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
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__company">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">About Company</h3>
                                    </div>
                                    <ul className="footer-widget__company-list list-unstyled">
                                        {companyLinks.map((link, index) => (
                                            <li key={index}>
                                                <Link to={link.link}>{link.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__services">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Services</h3>
                                    </div>
                                    <ul className="footer-widget__services-list list-unstyled">
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
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__newsletter">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Newsletter</h3>
                                    </div>
                                    <p className="footer-widget__newsletter-text">
                                        {newsletterText}
                                    </p>
                                    <form className="footer-widget__newsletter-form mc-form" data-url={newsletterUrl} noValidate="novalidate">
                                        <div className="footer-widget__newsletter-form-input-box">
                                            <input type="email" placeholder="Your e-mail" name="EMAIL" />
                                            <button type="submit" className="footer-widget__newsletter-btn">
                                                <span className="icon-paper-plane" />
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mc-form__response" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">
                            {copyrightText}
                        </p>
                        <ul className="list-unstyled site-footer__bottom-menu">
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
}

export default Footer;
