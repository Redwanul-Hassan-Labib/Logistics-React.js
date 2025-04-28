import React from 'react';

const AboutCard = ({ iconClass, title }) => {
    return (
        <div className="about-one__card">
            <div className="about-one__icon">
                <span className={iconClass} />
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default AboutCard;
