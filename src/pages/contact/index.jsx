import React, { useEffect, useState } from 'react';
import BackToTop from '../../components/elements/BackToTop';
import SiteBreadcrumb from '../../components/Common/Breadcumb';
import bannerbg from '../../assets/images/backgrounds/page-header-bg.jpg';
import Header from '../../components/Layout/Header';
import navImg1 from '../../assets/images/resources/logo-1.png';
import Footer from '../../components/Layout/Footer';
import ContactMain from './ContactMain';




// Breadcrumbs Background Image

const Contact = () => {
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
                parentMenu='contact'
                activeMenu="/contact"
            />
            {/* SiteBreadcrumb */}
            <SiteBreadcrumb
                pageTitle="Contact Us"
                pageName="Contact Us"
                breadcrumbsImg={bannerbg}
            />
            {/* SiteBreadcrumb */}

            {/* ContactMain Section Start */}
            <ContactMain />
            {/* ContactMain Section End */}
           
            <BackToTop scroll={isVisible} />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;