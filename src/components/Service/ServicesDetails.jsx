import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesDetails = ({ 
    client, 
    services, 
    getTouch, 
    details, 
    faqData 
}) => {
    const [isActive, setIsActive] = useState({ key: null });

    const handleToggle = (key) => {
        setIsActive(isActive.key === key ? { key: null } : { key });
    };

    return (
        <section className="services-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="services-details__left">
                            <div className="services-details__client-box">
                                <div className="services-details__client-img">
                                    <img src={client.image} alt={client.name} />
                                </div>
                                <h3 className="services-details__client-name">{client.name}</h3>
                                <p className="services-details__client-sub-title">{client.title}</p>
                                <p className="services-details__client-text">{client.text}</p>
                                <h3 className="services-details__client-number">
                                    <Link to={`tel:${client.phone}`}>{client.phone}</Link>
                                </h3>
                                <div className="services-details__client-social">
                                    {client.socials.map((social, index) => (
                                        <Link key={index} to={social.link}>
                                            <span className={social.icon} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="services-details__services-box">
                                <h3 className="services-details__services-list-title">Our Services</h3>
                                <ul className="services-details__service-list list-unstyled">
                                    {services.map((service, index) => (
                                        <li key={index} className={service.active ? 'active' : ''}>
                                            <div className="icon">
                                                <span className="icon-dabble-arrow" />
                                            </div>
                                            <p>
                                                <Link to={service.link}>{service.name}</Link>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="services-details__get-touch">
                                <div
                                    className="services-details__get-touch-bg"
                                    style={{ backgroundImage: `url(${getTouch.background})` }}
                                ></div>
                                <h3 className="services-details__get-touch-title">{getTouch.title}</h3>
                                <p className="services-details__get-touch-sub-title">{getTouch.subTitle}</p>
                                <div className="services-details__get-touch-icon">
                                    <span className={getTouch.icon} />
                                </div>
                                <h3 className="services-details__get-touch-number">
                                    <Link to={`tel:${getTouch.phone}`}>{getTouch.phone}</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="services-details__right">
                            <h3 className="services-details__title-1">{details.title}</h3>
                            <p className="services-details__text-1">{details.text1}</p>
                            <div className="services-details__img-1">
                                <img src={details.image1} alt="" />
                            </div>
                            <div className="services-details__service-box">
                                <div className="row">
                                    {details.serviceBoxes.map((serviceBox, index) => (
                                        <div key={index} className="col-xl-6 col-lg-6">
                                            <div className="services-details__service-single">
                                                <div className="services-details__service-icon">
                                                    <span className={serviceBox.icon} />
                                                </div>
                                                <h3 className="services-details__service-title">
                                                    <Link to={serviceBox.link}>{serviceBox.title}</Link>
                                                </h3>
                                                <p className="services-details__service-text">{serviceBox.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="services-details__text-2">{details.text2}</p>
                            <div className="services-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    {faqData.map((faq, index) => (
                                        <div key={index} className={isActive.key === index ? "accrodion active" : "accrodion"} onClick={() => handleToggle(index)}>
                                            <div className="accrodion-count" />
                                            <div className="accrodion-title">
                                                <h4>{faq.question}</h4>
                                            </div>
                                            <div className={isActive.key === index ? "accrodion-content current" : "accrodion-content"}>
                                                <div className="inner">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="blog-details__pagenation-box">
                                    <ul className="list-unstyled blog-details__pagenation">
                                        <li>
                                            <div className="icon">
                                                <Link to={details.prevLink}>
                                                    <span className="icon-arrow-left" />
                                                </Link>
                                            </div>
                                            <p>{details.prevText}</p>
                                        </li>
                                        <li>
                                            <p>{details.nextText}</p>
                                            <div className="icon">
                                                <Link to={details.nextLink}>
                                                    <span className="icon-arrow-right" />
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesDetails;
