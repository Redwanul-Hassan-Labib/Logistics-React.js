// src/components/ServiceItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ iconClass, title, link }) => (
    <div className="services-one__single">
        <div className="services-one__icon">
            <span className={iconClass} />
        </div>
        <h3 className="services-one__title">
            <Link to={link}>
                {title}
            </Link>
        </h3>
        <div className="services-one__btn-box">
            <Link to={link} className="thm-btn services-one__btn">
                Read more
                <span />
            </Link>
        </div>
    </div>
);

export default ServiceItem;
