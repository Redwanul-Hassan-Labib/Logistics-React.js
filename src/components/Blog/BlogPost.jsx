import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ( props ) => {
    const {imageUrl, date, title, comments, author, excerpt, postLink, socialLinks } = props;
    return (
        <>
      
    {/*Blog One Single Start*/}
    <div className="blog-page__single">
      <div className="blog-page__img">
        <img src={imageUrl} alt={title} />
        <div className="blog-page__date">
          <p>{date}</p>
        </div>
      </div>
      <div className="blog-page__content">
        <ul className="blog-page__meta list-unstyled">
          <li>
            <Link to={postLink}>
              <span className="icon-comments-2" />
              Comments ({comments})
            </Link>
          </li>
          <li>
            <Link to={postLink}>
              <span className="icon-user-2" />
              By {author}
            </Link>
          </li>
        </ul>
        <h3 className="blog-page__title">
          <Link to={postLink}>{title}</Link>
        </h3>
        <p className="blog-page__text">{excerpt}</p>
        <div className="blog-page__btn-box">
          <Link to={postLink} className="thm-btn blog-page__btn">
            Read more
            <span />
          </Link>
        </div>
        <div className="blog-page__social">
          {socialLinks.map((link, index) => (
            <Link key={index} to={link.url}>
              <span className={link.iconClass} />
            </Link>
          ))}
        </div>
      </div>
    </div>
    {/*Blog One Single End*/}
    </>

    )
}

export default BlogPost
