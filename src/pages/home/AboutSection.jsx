import React from 'react';
import AboutOne from '../../components/About/AboutOne';
import aboutImage from '../../assets/images/shapes/about-one-shape-1.png';
import aboutImg1 from '../../assets/images/resources/about-one-img-1.jpg';
import aboutImg2 from '../../assets/images/resources/about-one-img-2.jpg';

const About = () => {
    return (
        <>
            {/* About One Start */}
            <AboutOne 
                className="about-one"
                tagline="About Us"
                title="Seamless logistics for your business needs"
                description="Construction is an essential industry that involves building and designing structures such as buildings, roads, and bridges"
                listItems={[
                    { iconClass: "icon-conveyor-1", title: "Delivering success through logistics" },
                    { iconClass: "icon-clock", title: "Logistics expertise for your competitive edge" },
                    { iconClass: "icon-fragile", title: "Streamlining supply chain processes" }
                ]}
                images={{
                    shapeImage: aboutImage,
                    photo1: aboutImg1,
                    photo2: aboutImg2,
                }}
                trustedCount={6}
                trustedText="Trusted Customer"
                linkTo="/about"
                buttonText="Read more"
                containerClass="container"
                imgAltTexts={{
                    photo1: "Construction site",
                    photo2: "Construction equipment",
                }}
            />
            {/* About One End */}
        </>
    );
}

export default About;
