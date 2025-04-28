import React from 'react';
import BlogDetails from '../../components/BlogDetails';
import blogImage1 from '../../assets/images/blog/blog-details-img-1.jpg';
import blogImageBox1 from '../../assets/images/blog/blog-details-img-box-img-1.jpg';
import blogImageBox2 from '../../assets/images/blog/blog-details-img-box-img-2.jpg';
import blogImageBox3 from '../../assets/images/blog/blog-details-img-box-img-3.jpg';
import SearchWidget from '../../components/Widget/SearchWidget';
import SidebarLatestBlogs from '../../components/Widget/SidebarLatestBlogs';
import SidebarCategory from '../../components/Widget/SidebarCategory';
import SidebarTags from '../../components/Widget/SidebarTags';
import LatestBlogs1 from '../../assets/images/blog/lp-1-1.jpg';
import LatestBlogs2 from '../../assets/images/blog/lp-1-2.jpg';
import LatestBlogs3 from '../../assets/images/blog/lp-1-3.jpg';



const BlogDetailsMain = () => {
    const blogPost = {
        imageUrl: blogImage1,
        comments: 5,
        author: 'Admin',
        title: 'Efficiently moving your goods',
        text1: 'Construction is an essential industry that involves building and designing structures such as buildings or bridges, and more. It requires skilled workers, materials, and careful planning to ensure successful...',
        text2: 'Construction is an essential industry that involves building and designing structures such as buildings or bridges, and more. It requires skilled workers, materials, and careful planning to ensure successful Construction...',
        clientQuote: 'Construction is an essential industry that involves building and designing structures such as buildings or bridges, and more. It requires skilled workers, materials...',
        clientName: 'SHAkib Al Hasan',
        clientTitle: 'Logistics Solutions',
        clientRating: 5,
        subtitle: 'Keep your free time free!',
        text3: 'Construction is an essential industry that involves building and designing structures such as buildings or bridges, and more. It requires skilled workers, materials, and careful planning to ensure successful...',
        points: [
            ['Efficiently moving your goods, every time.', 'Streamline your supply chain with our logistics', 'Trust us for reliable and cost-effective logistics'],
            ['Delivering your goods with precision', 'Optimize your logistics with our expertise.', 'Your one-stop solution for logistics']
        ],
        images: [blogImageBox1, blogImageBox2, blogImageBox3],
        text4: 'Logistics service involves the planning, implementation, and control of the efficient and effective transportation, storage, and distribution of goods and materials...',
        tags: ['Swift Supply Chain', 'Speedy Dispatch'],
        socialLinks: [
            { url: 'https://facebook.com', iconClass: 'icon-facebook-f' },
            { url: 'https://instagram.com', iconClass: 'icon-instagram' },
            { url: 'https://twitter.com', iconClass: 'icon-Vector' },
            { url: 'https://linkedin.com', iconClass: 'icon-linkedin-in' }
        ],
        prevPost: { link: '/prev-post', text: 'More Care places' },
        nextPost: { link: '/next-post', text: 'Mastering the Art' }
    };
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
    

    return (
        <React.Fragment>
            {/*Blog Details Start*/}
            <section className="blog-details">
                <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <BlogDetails {...blogPost} />
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
            {/*Blog Details End*/}
        </React.Fragment>
    );
};

export default BlogDetailsMain;
