import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ( props ) => {
    const {delay, iconClass, title, linkUrl, buttonText } = props;
    return (
        <>
      
    {/*Services One Single Start*/}
    <div className={`col-xl-4 col-lg-4 wow fadeInLeft`} data-wow-delay={delay}>
      <div className="services-one__single">
        <div className="services-one__icon">
          <span className={iconClass} />
        </div>
        <h3 className="services-one__title">
          <Link to={linkUrl}>
            {title}
          </Link>
        </h3>
        <div className="services-one__btn-box">
          <Link to={linkUrl} className="thm-btn services-one__btn">
            {buttonText}
            <span />
          </Link>
        </div>
      </div>
    </div>
    {/*Services One Single End*/}
    </>

    )
}

export default ServiceCard