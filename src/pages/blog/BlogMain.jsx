import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../../components/Blog/BlogPost';
import BlogImg1 from '../../assets/images/blog/blog-page-1-1.jpg';
import BlogImg2 from '../../assets/images/blog/blog-page-1-2.jpg';
import blogImg3 from '../../assets/images/blog/blog-page-1-3.jpg';
import SearchWidget from '../../components/Widget/SearchWidget';
import SidebarLatestBlogs from '../../components/Widget/SidebarLatestBlogs';
import LatestBlogs1 from '../../assets/images/blog/lp-1-1.jpg';
import LatestBlogs2 from '../../assets/images/blog/lp-1-2.jpg';
import LatestBlogs3 from '../../assets/images/blog/lp-1-3.jpg';
import SidebarCategory from '../../components/Widget/SidebarCategory';
import SidebarTags from '../../components/Widget/SidebarTags';

const BlogMain = () => {
    // blog entries
    const blogs = [
        {
          imageUrl: LatestBlogs1,
          date: 'Jan 10, 2022',
          title: 'Optimize your logistics with our expertise',
          link: '/blog-details'
        },
        {
          imageUrl: LatestBlogs2,
          date: 'Jan 10, 2022',
          title: 'We make logistics easy for your business',
          link: '/blog-details'
        },
        {
          imageUrl: LatestBlogs3,
          date: 'Jan 10, 2022',
          title: 'Your one-stop solution for services',
          link: '/blog-details'
        }
        // Add more blog entries as needed
      ];
    // blog categories
      const categories = [
        { name: 'Express Freight Solutions', count: 2, link: '/blog-details' },
        { name: 'QuickMove Logistics', count: 2, link: '/blog-details' },
        { name: 'Speedy Dispatch', count: 2, link: '/blog-details' },
        { name: 'Swift Supply Chain', count: 2, link: '/blog-details' },
        // Add more categories as needed
      ];
    // blog tags
      const tags = [
        { name: 'Prime Movers', link: '/blog-details' },
        { name: 'Dispatch', link: '/blog-details' },
        { name: 'Logistics', link: '/blog-details' },
        { name: 'Shipping', link: '/blog-details' },
        { name: 'Cargo', link: '/blog-details' },
        { name: 'Reliable Third', link: '/blog-details' },
        // Add more tags as needed
      ];
    // blog posts
    const blogPosts = [
        {
          imageUrl: BlogImg1,
          date: '29 Jan 2024',
          title: 'Creating Lasting Impressions',
          comments: 5,
          author: 'admin',
          excerpt: 'Construction is an essential industry that involves building and designing structures such as buildings roads, bridges, and more. It requires skilled workers, materials, and careful',
          postLink: '/blog-details',
          socialLinks: [
            { url: '/blog-details', iconClass: 'icon-instagram' },
            { url: '/blog-details', iconClass: 'icon-facebook-f' },
            { url: '/blog-details', iconClass: 'icon-Vector' },
            { url: '/blog-details', iconClass: 'icon-linkedin-in' },
          ],
        },
        {
          imageUrl: BlogImg2,
          date: '29 Jan 2024',
          title: 'Efficiently moving your goods',
          comments: 5,
          author: 'admin',
          excerpt: 'Construction is an essential industry that involves building and designing structures such as buildings roads, bridges, and more. It requires skilled workers, materials, and careful',
          postLink: '/blog-details',
          socialLinks: [
            { url: '/blog-details', iconClass: 'icon-instagram' },
            { url: '/blog-details', iconClass: 'icon-facebook-f' },
            { url: '/blog-details', iconClass: 'icon-Vector' },
            { url: '/blog-details', iconClass: 'icon-linkedin-in' },
          ],
        },
        {
          imageUrl: blogImg3,
          date: '29 Jan 2024',
          title: 'Cultivate Success with Agriculture',
          comments: 5,
          author: 'admin',
          excerpt: 'Construction is an essential industry that involves building and designing structures such as buildings roads, bridges, and more. It requires skilled workers, materials, and careful',
          postLink: '/blog-details',
          socialLinks: [
            { url: '/blog-details', iconClass: 'icon-instagram' },
            { url: '/blog-details', iconClass: 'icon-facebook-f' },
            { url: '/blog-details', iconClass: 'icon-Vector' },
            { url: '/blog-details', iconClass: 'icon-linkedin-in' },
          ],
        },
        // Add more blog posts as needed
      ];
    

    return (
        <React.Fragment>
            {/*Blog Page Start*/}
            <section className="blog-page">
                <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        {blogPosts.map((post, index) => (
                            <BlogPost key={index} {...post} />
                        ))}
                        <div className="blog-page__pagination">
                            <ul className="pg-pagination list-unstyled">
                            <li className="count">
                                <Link to="/blog-details">1</Link>
                            </li>
                            <li className="count">
                                <Link to="/blog-details">2</Link>
                            </li>
                            <li className="count">
                                <Link to="/blog-details">3</Link>
                            </li>
                            <li className="next">
                                <Link to="#" aria-label="Next">
                                <i className="icon-dabble-arrow" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                    <div className="sidebar">
                        <SearchWidget/>
                        <SidebarLatestBlogs blogs={blogs} />
                        <SidebarCategory categories={categories} />
                        <SidebarTags tags={tags} />
                    </div>
                    </div>
                    </div>
                </div>
            </section>
            {/*Blog Page End*/}
        </React.Fragment>
    );
};

export default BlogMain;
