import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({
    imageUrl,
    comments = 0,
    author = 'admin',
    title,
    text1,
    text2,
    clientQuote,
    clientName,
    clientTitle,
    clientRating = 5,
    subtitle,
    text3,
    points = [],
    images = [],
    text4,
    tags = [],
    socialLinks = [],
    prevPost = { link: '#', text: 'Previous Post' },
    nextPost = { link: '#', text: 'Next Post' }
}) => {
    return (
        <div className="blog-details__left">
            <div className="blog-details__img">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="blog-details__content">
                <ul className="blog-details__meta list-unstyled">
                    <li>
                        <Link to="#"><span className="icon-comments-2"></span> Comments ({comments})</Link>
                    </li>
                    <li>
                        <Link to="#"><span className="icon-user-2"></span> By {author}</Link>
                    </li>
                </ul>
                <h3 className="blog-details__title-1">{title}</h3>
                <p className="blog-details__text-1">{text1}</p>
                <p className="blog-details__text-2">{text2}</p>
                <div className="blog-details__client-box">
                    <div className="blog-details__quote">
                        <span className="icon-quote"></span>
                    </div>
                    <p className="blog-details__client-text">{clientQuote}</p>
                    <h4 className="blog-details__client-name">{clientName}</h4>
                    <p className="blog-details__client-sub-title">{clientTitle}</p>
                    <div className="blog-details__client-ratting">
                        {Array(clientRating).fill().map((_, i) => (
                            <span key={i} className={`icon-star ${i === clientRating - 1 ? 'icon-star-two' : ''}`}></span>
                        ))}
                    </div>
                </div>
                <h3 className="blog-details__title-2">{subtitle}</h3>
                <p className="blog-details__text-3">{text3}</p>
                <div className="blog-details__points-box">
                    {points.map((pointGroup, index) => (
                        <ul key={index} className="blog-details__points-list list-unstyled">
                            {pointGroup.map((point, i) => (
                                <li key={i}>
                                    <div className="icon">
                                        <span className="icon-dabble-arrow"></span>
                                    </div>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="blog-details__img-box">
                    {images.map((image, index) => (
                        <div key={index} className="blog-details__img-box-img">
                            <img src={image} alt={`Detail ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <p className="blog-details__text-4">{text4}</p>
                <div className="blog-details__tag-and-social">
                    <div className="blog-details__tag-box">
                        <span>Tags:</span>
                        {tags.map((tag, index) => (
                            <Link key={index} to="#">{tag}</Link>
                        ))}
                    </div>
                    <div className="blog-details__social">
                        {socialLinks.map((link, index) => (
                            <Link key={index} to={link.url}>
                                <span className={link.iconClass}></span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="blog-details__pagenation-box">
                    <ul className="list-unstyled blog-details__pagenation">
                        <li>
                            <div className="icon">
                                <Link to={prevPost.link}>
                                    <span className="icon-arrow-left"></span>
                                </Link>
                            </div>
                            <p>{prevPost.text}</p>
                        </li>
                        <li>
                            <p>{nextPost.text}</p>
                            <div className="icon">
                                <Link to={nextPost.link}>
                                    <span className="icon-arrow-right"></span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
