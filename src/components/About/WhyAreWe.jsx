import React from 'react';

const WhyAreWe = ({ imageSrc1, imageSrc2, tagline, title, points, year, yearDescription }) => {
    return (
        <section className="why-are-we">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="why-are-we__left">
                            <div className="why-are-we__img">
                                <img src={imageSrc1} alt="Why Are We" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="why-are-we__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">{tagline}</span>
                                </div>
                                <h2 className="section-title__title mx_with">
                                    {title}
                                </h2>
                            </div>
                            <ul className="why-are-we__list list-unstyled">
                                {points.map((point, index) => (
                                    <li key={index}>
                                        <div className={`why-are-we__icon ${point.iconClass}`}>
                                            <span className={point.arrowIcon} />
                                        </div>
                                        <div className="icon">
                                            <span className={point.icon} />
                                        </div>
                                        <div className="content">
                                            <h3>{point.heading}</h3>
                                            <p>{point.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="why-are-we__img-2">
                                <img src={imageSrc2} alt="Why Are We" />
                                <div
                                    className="why-are-we__year wow fadeInLeft"
                                    data-wow-delay="300ms"
                                >
                                    <h3>{year}</h3>
                                    <p>{yearDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyAreWe;
