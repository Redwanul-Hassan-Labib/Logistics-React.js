import React from 'react';
import BlogCard from '../../components/Blog/BlogCard'; // Adjust the import path as needed
import BlogImg1 from '../../assets/images/blog/blog-2-1.jpg';
import BlogImg2 from '../../assets/images/blog/blog-2-2.jpg';
import BlogImg3 from '../../assets/images/blog/blog-2-3.jpg';

const Blog = () => {
    const blogData = [
        {
            id: 1,
            image: BlogImg1,
            date: { day: "09", month: "Apr" },
            author: "By admin",
            comments: "05",
            title: "Your trusted the provider Express Logistics",
            detailsLink: "/blog-details",
            fadeInClass: "fadeInLeft" // Custom fade-in class
        },
        {
            id: 2,
            image: BlogImg2,
            date: { day: "09", month: "Apr" },
            author: "By admin",
            comments: "05",
            title: "Delivering success through logistics Logistics",
            detailsLink: "/blog-details",
            fadeInClass: "fadeInUp" // Custom fade-in class
        },
        {
            id: 3,
            image: BlogImg3,
            date: { day: "09", month: "Apr" },
            author: "By admin",
            comments: "05",
            title: "Streamlining your supply Your provider",
            detailsLink: "/blog-details",
            fadeInClass: "fadeInRight" // Custom fade-in class
        }
    ];

    return (
        <>
            
            {/* Using a custom className */}
            <BlogCard 
                className="blog-two" 
                blogData={blogData} 
            />
        </>
    );
};

export default Blog;
