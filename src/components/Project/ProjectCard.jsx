import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ projects = [], sectionClassName }) => {
    // Use "project-one" as the default class name if sectionClassName is not provided
    const className = sectionClassName || "project-one";

    return (
        <section className={className}>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <div
                            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                            data-wow-delay={`${100 + index * 200}ms`}
                            key={project.id}
                        >
                            <div className="project-two__single">
                                {project.content ? (
                                    <div className="project-two__content-box">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <span className="section-title__tagline">Latest project</span>
                                            </div>
                                            <h2 className="section-title__title">{project.content}</h2>
                                        </div>
                                        <div className="project-two__btn-box">
                                            <Link to={project.link} className="thm-btn project-two__btn">
                                                More project <span />
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="project-two__img">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-two__content">
                                            <p className="project-two__sub-title">{project.category}</p>
                                            <h3 className="project-two__title">
                                                <Link to={project.link}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;
