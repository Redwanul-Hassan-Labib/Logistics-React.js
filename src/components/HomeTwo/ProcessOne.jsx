import React from 'react';

const ProcessOne = ({ tagline, title, processes }) => {
    return (
        <section className="process-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">{tagline}</span>
                    </div>
                    <h2 className="section-title__title" dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <div className="row">
                    {processes.map((process, index) => (
                        <div 
                            key={index} 
                            className={`col-xl-4 col-lg-4 wow fadeInUp`} 
                            data-wow-delay={`${100 * (index + 1)}ms`}
                        >
                            <div className="process-one__single">
                                <div className="process-one__shape-1">
                                    <img src={process.shapeImage} alt="" />
                                </div>
                                <div className="process-one__count" />
                                <h3 className="process-one__title">{process.title}</h3>
                                <div className="process-one__icon-and-text">
                                    <div className="icon">
                                        <span className={process.iconClass} />
                                    </div>
                                    <p>{process.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessOne;
