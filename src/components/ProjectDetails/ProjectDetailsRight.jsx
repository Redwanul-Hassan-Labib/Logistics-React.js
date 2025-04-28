import React from 'react';

const ProjectDetailsRight = ({ projectData }) => {
    if (!projectData) return null;

    const {
        mainImage,
        title,
        text1,
        text2,
        points,
        additionalImages,
        text3
    } = projectData;

    return (
        <div className="project-details__right">
            <div className="project-details__img">
                <img src={mainImage} alt={title} />
            </div>
            <h3 className="project-details__title-1">{title}</h3>
            <p className="project-details__text-1">{text1}</p>
            <p className="project-details__text-2">{text2}</p>
            <ul className="project-details__points list-unstyled">
                {points.map((point, index) => (
                    <li key={index}>
                        <div className="icon">
                            <span className="icon-dabble-arrow" />
                        </div>
                        <p>{point}</p>
                    </li>
                ))}
            </ul>
            <div className="project-details__img-box">
                <div className="row">
                    {additionalImages.map((image, index) => (
                        <div className="col-xl-6" key={index}>
                            <div className="project-details__img-box-img">
                                <img
                                    src={image}
                                    alt={`Additional view ${index + 1}`} // Improved description
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="project-details__text-3">{text3}</p>
        </div>
    );
};

export default ProjectDetailsRight;
