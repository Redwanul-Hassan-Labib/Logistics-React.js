import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetailsLeft = ({ projectInfo }) => {
    if (!projectInfo) return null;

    const {
        category,
        customer,
        startDate,
        endDate,
        rating,
        address,
        phone,
        fax,
        email,
        socialLinks,
    } = projectInfo;

    return (
        <div className="project-details__left">
            <div className="project-details__information">
                <h3 className="project-details__information-title">Project Information</h3>
                <ul className="project-details__information-list list-unstyled">
                    <li>
                        <span>Category:</span>
                        <p>{category}</p>
                    </li>
                    <li>
                        <span>Customer:</span>
                        <p>{customer}</p>
                    </li>
                    <li>
                        <span>Start date:</span>
                        <p>{startDate}</p>
                    </li>
                    <li>
                        <span>End date:</span>
                        <p>{endDate}</p>
                    </li>
                    <li>
                        <span>Rating:</span>
                        <p>
                            {Array.from({ length: rating }, (_, i) => (
                                <i className="icon-star" key={i} />
                            ))}
                        </p>
                    </li>
                </ul>
                <div className="project-details__social">
                    {socialLinks.map((link, index) => (
                        <Link to={link.url} aria-label={link.label} key={`${link.url}-${index}`}>
                            <span className={link.iconClass} />
                        </Link>
                    ))}
                </div>
            </div>
            <ul className="project-details__contact-list list-unstyled">
                <li>
                    <div className="icon">
                        <span className="icon-location icon-1" />
                    </div>
                    <div className="content">
                        <h3>Address</h3>
                        <p>{address}</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <span className="icon-call icon-2" />
                    </div>
                    <div className="content">
                        <h3>Let's Talk</h3>
                        <p>
                            Phone number:{" "}
                            <a href={`tel:${phone}`}>{phone}</a>
                        </p>
                        <p>
                            Fax: <a href={`tel:${fax}`}>{fax}</a>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <span className="icon-envolop icon-3" />
                    </div>
                    <div className="content">
                        <h3>Send us an email</h3>
                        <p>
                            <a href={`mailto:${email}`}>{email}</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProjectDetailsLeft;
