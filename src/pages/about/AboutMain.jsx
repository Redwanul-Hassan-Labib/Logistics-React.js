import React from 'react';
import AboutOne from '../../components/About/AboutOne'; // Adjust the import path as needed
import CounterOne from '../../components/About/CounterOne';
import videoImg from '../../assets/images/resources/counter-one-img-1.jpg';
import WhyAreWe from '../../components/About/WhyAreWe';
import image1 from '../../assets/images/resources/why-are-we-img-1.jpg';
import image2 from '../../assets/images/resources/why-are-we-img-2.jpg';
import TestimonialsSection from '../../components/About/TestimonialsSection';

const AboutMain = () => {
    const counters = [
        { iconClass: 'icon-schedule', end: 100, suffix: '+', text: 'Our Happy Customers' },
        { iconClass: 'icon-schedule', end: 2, suffix: 'k', plus: true, text: 'Our Team Members' },
        { iconClass: 'icon-schedule', end: 3, suffix: 'k', plus: true, text: 'Our Client Reviews' }
    ];
    const points = [
        {
            iconClass: 'why-are-we__icon',
            arrowIcon: 'icon-arrow-down-left',
            icon: 'icon-location why-are-we__location',
            heading: 'Real Time tracking',
            text: 'Logistic service involves the implementation and control'
        },
        {
            iconClass: 'why-are-we__icon-2',
            arrowIcon: 'icon-arrow-down-right',
            icon: 'icon-shopping-cart why-are-we__cart',
            heading: 'On time delivery',
            text: 'Logistic service involves the implementation and control'
        },
        {
            iconClass: '',
            arrowIcon: '',
            icon: 'icon-call why-are-we__call',
            heading: '24/7 online support',
            text: 'Logistic service involves the implementation and control'
        }
    ];
    

    return (
        <React.Fragment>
            <AboutOne />
            <CounterOne
                imageSrc={videoImg}
                videoId="jNQXAC9IVRw" // YouTube video ID
                videoCaption="Watch our video"
                tagline="Our Features"
                title="Simplifying your logistics of the challenges"
                description="Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials."
                counters={counters}
            />
            <TestimonialsSection/>
             <WhyAreWe
                imageSrc1={image1}
                imageSrc2={image2}
                tagline="Why are we best"
                title="Efficiency at its best with our logistics services"
                points={points}
                year="Since 1920"
                yearDescription="Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage"
            />
        </React.Fragment>
    );
};

export default AboutMain;
