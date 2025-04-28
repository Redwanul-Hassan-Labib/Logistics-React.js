import React, { useEffect, useState } from 'react';
import BackToTop from '../../components/elements/BackToTop';
import Header from '../../components/Layout/Header';
import navImg1 from '../../assets/images/resources/logo-1.png';
import Footer from '../../components/Layout/Footer';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import CtaSection from '../../components/Common/CtaSection';
import shapeImageUrl from '../../assets/images/shapes/cta-one-shape-1.png';
import ProjectMain from './ProjectMain';


// Breadcrumbs Background Image

const Project = () => {

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
            parentMenu='projects'
            activeMenu="/projects"
        />
        {/* SiteBreadcrumb */}
        <SiteBreadcrumb
            pageTitle="Projects"
            pageName="Projects"
            breadcrumbsImg={bannerbg}
        />
        {/* SiteBreadcrumb */}
        <ProjectMain/>
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

export default Project;