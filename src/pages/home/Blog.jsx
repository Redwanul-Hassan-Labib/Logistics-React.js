import React from 'react';
import SingleBlog from '../../components/Blog/SingleBlog';
import BlogImg1 from '../../assets/images/blog/blog-1-1.jpg';
import BlogImg2 from '../../assets/images/blog/blog-1-2.jpg';
import BlogImg3 from '../../assets/images/blog/blog-1-3.jpg';

const Blog = ( ) => {
    const blogUrl = '/blog-details'; // Dynamic URL
    const buttonText = 'Read More'; // Dynamic text
    return (
        <>
        {/*Blog One Start*/}
        <section className="blog-one">
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
                {/*Blog One Single Start*/}
                <SingleBlog 
                    blogImage={BlogImg1}
                    blogDate='24 March'
                    blogTitle='Your trusted logistics provider Express Logistics'
                    blogDesc='It is a long-established fact that a reader will be distracted.'
                    linkUrl={blogUrl}
                    linkText={buttonText}
                />
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <SingleBlog 
                    blogImage={BlogImg2}
                    blogDate='24 March'
                    blogTitle='Logistics expertise for your the competitive advantage'
                    blogDesc='It is a long-established fact that a reader will be distracted.'
                    linkUrl={blogUrl}
                    linkText={buttonText}
                />
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <SingleBlog 
                    blogImage={BlogImg3}
                    blogDate='24 March'
                    blogTitle='Streamlining your supply chain processes Express'
                    blogDesc='It is a long-established fact that a reader will be distracted.'
                    linkUrl={blogUrl}
                    linkText={buttonText}
                />
                {/*Blog One Single End*/}
            </div>
            </div>
        </section>
        {/*Blog One End*/}
        </>
    );
}

export default Blog;