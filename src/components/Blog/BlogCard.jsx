import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ 
    className = "blog-two",
    blogData = []
}) => {
    return (
        <>
            {/* Blog Section Start */}
            <section className={className}>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Latests Blog</span>
                        </div>
                        <h2 className="section-title__title">
                            Streamlining your supply
                            <br /> chain processes
                        </h2>
                    </div>
                    <div className="row">
                        {blogData.map((blog, index) => (
                            <div 
                                className={`col-xl-4 col-lg-4 wow ${blog.fadeInClass || 'fadeInUp'}`} 
                                data-wow-delay={`${100 + index * 100}ms`} 
                                key={blog.id}
                            >
                                <div className="blog-two__single">
                                    <div className="blog-two__img-box">
                                        <div className="blog-two__img">
                                            <img src={blog.image} alt={blog.title} />
                                        </div>
                                        <div className="blog-two__date">
                                            <p>
                                                {blog.date.day}
                                                <br />
                                                <span>{blog.date.month}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="blog-two__content-inner">
                                        <div className="blog-two__content">
                                            <ul className="blog-two__meta list-unstyled">
                                                <li>
                                                    <Link to={blog.detailsLink}>
                                                        <span className="icon-user" />
                                                        {blog.author}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={blog.detailsLink}>
                                                        <span className="icon-comments" />
                                                        Comments ({blog.comments})
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3 className="blog-two__title">
                                                <Link to={blog.detailsLink}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
                                        </div>
                                        <div className="blog-two__btn-box">
                                            <Link to={blog.detailsLink} className="thm-btn blog-two__btn">
                                                Read more
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
};

export default BlogCard;
