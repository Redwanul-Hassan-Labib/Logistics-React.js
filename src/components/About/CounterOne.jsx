import React, { useState } from 'react';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

const CounterOne = ({
    imageSrc,
    videoId,
    videoCaption,
    tagline,
    title,
    description,
    counters = []
}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className="counter-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div
                            className="counter-one__left wow slideInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                        >
                            <div className="counter-one__img">
                                <img src={imageSrc} alt="Feature visual" />
                                <div className="counter-one__video-link">
                                    <button 
                                        onClick={() => setOpen(true)} 
                                        className="video-popup" 
                                        aria-label="Open video modal"
                                    >
                                        <div className="counter-one__video-icon">
                                            <span className="icon-play" />
                                            <i className="ripple" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div
                            className="counter-one__right wow slideInRight"
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                        >
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">{tagline}</span>
                                </div>
                                <h2 className="section-title__title">
                                    {title}
                                </h2>
                            </div>
                            <p className="counter-one__right-text">
                                {description}
                            </p>
                            <ul className="counter-one__count-list list-unstyled">
                                {counters.map((counter, index) => (
                                    <li key={index}>
                                        <div className="counter-one__icon-and-count">
                                            <div className="counter-one__icon">
                                                <span className={counter.iconClass} />
                                            </div>
                                            <div className="counter-one__count count-box">
                                                <h3 className="count-text">
                                                    <CountUp end={counter.end} duration={2} />
                                                </h3>
                                                <span>{counter.suffix}</span>
                                                {counter.plus && <span className="counter-one__count-plus">+</span>}
                                            </div>
                                        </div>
                                        <p className="counter-one__count-text">{counter.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setOpen(false)}
            />
        </section>
    );
}

export default CounterOne;
