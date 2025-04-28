// src/components/TeamMember.js
import React from 'react';
import { Link } from 'react-router-dom';

const TeamMember = ({ image, name, position, socialLinks, link }) => {
    return (
        <div className="team-one__single">
            <div className="team-one__img">
                <img src={image} alt={name} />
            </div>
            <div className="team-one__content">
                <h3 className="team-one__title">
                    <Link to={link}>{name}</Link>
                </h3>
                <p className="team-one__sub-title">{position}</p>
                <div className="team-one__social">
                    {socialLinks.map((social, index) => (
                        <Link key={index} to={social.url}>
                            <span className={social.iconClass} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
