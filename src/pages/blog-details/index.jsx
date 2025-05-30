import React, { useEffect, useState } from 'react';
import BackToTop from '../../components/elements/BackToTop';
import Header from '../../components/Layout/Header';
import navImg1 from '../../assets/images/resources/logo-1.png';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import BlogDetailsMain from './BlogDetailsMain';
import CtaSection from '../../components/Common/CtaSection';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';

// Breadcrumbs Background Image

const BlogDetails = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <Header
                navImg={navImg1}
                parentMenu='blog-details'
                activeMenu="/blog-details"
            />
            {/* breadcrumb-area-start */}
            <SiteBreadcrumb
                pageTitle="Blog Details"
                pageName="Blog Details"
                breadcrumbsImg={bannerbg}
            />
            {/* breadcrumb-area-start */}
            <BlogDetailsMain/>
            {/*cta-section */}
            <CtaSection
            className="cta-one cta-two" // Custom class name
            breadcrumbsImg={bannerbg}
            shapeImageUrl={shapeImageUrl}
            title="Need any help? contact us!"
            text="Need help?"
            phoneNumber="(307) 555-0133"
            />
            {/*cta-section end */}
            <BackToTop scroll={isVisible} />
            <Footer />
        </React.Fragment>
    );
}

export default BlogDetails;