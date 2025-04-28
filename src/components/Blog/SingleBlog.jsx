
import { Link } from 'react-router-dom';

const SingleBlog = ( props ) => {
    const {blogClass, blogImage, blogDate, blogTitle, blogDesc, linkUrl, linkText } = props;
    return (
        <>
      
    {/*Blog One Single Start*/}
    <div
      className="col-xl-4 col-lg-4 wow fadeInLeft"
      data-wow-delay="100ms"
      >
      <div className={blogClass ? blogClass : 'blog-one__single'}>
          <div className="blog-one__img-box">
          <div className="blog-one__img">
            <img
                src={blogImage}
                alt={blogTitle}
            />
          </div>
          <div className="blog-one__date">
              <p>{blogDate ? blogDate : '24 March'}</p>
          </div>
          </div>
          <div className="blog-one__content">
          <h3 className="blog-one__title">
              <Link to="/blog-details">
                {blogTitle ? blogTitle : 'Your trusted logistics provider Express Logistics'}
              </Link>
          </h3>
          <p className="blog-one__text">{blogDesc ? blogDesc : 'It is a long-established fact that a reader will be distracted.'}</p>
          <div className="blog-one__read-more">
            <Link to={linkUrl}>
              {linkText}
              <span className="icon-arrow-right" />
            </Link>
          </div>
          </div>
          </div>
      </div>
    {/*Blog One Single End*/}
    </>

    )
}

export default SingleBlog