import React from 'react';
import CounterUp from 'react-countup';

const CounterTwo = ({ image, sinceYear, counters }) => {
    return (
        <section className="counter-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div
                            className="counter-two__left wow slideInLeft"
                            data-wow-delay="100ms"
                            data-wow-duration="2500ms"
                        >
                            <div className="counter-two__img">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="counter-two__right">
                            <div className="counter-two__big-text">
                                <h3>{sinceYear}</h3>
                            </div>
                            <div className="counter-two__count-box">
                                <ul className="counter-two__count-list list-unstyled">
                                    {counters.map((counter, index) => (
                                        <li key={index}>
                                            <div className="counter-two__count-list-single">
                                                <div className="counter-two__icon-and-count">
                                                    <div className="counter-two__count count-box">
                                                        <h3 className="count-text">
                                                            <CounterUp end={counter.end} />
                                                        </h3>
                                                        <span>{counter.unit}</span>
                                                        <span>+</span>
                                                    </div>
                                                    <div className="counter-two__icon">
                                                        <span className={counter.iconClass} />
                                                    </div>
                                                </div>
                                                <p className="counter-two__count-text">
                                                    {counter.text}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterTwo;
