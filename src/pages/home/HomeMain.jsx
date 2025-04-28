import React from 'react';
import Banner from "./Banner"
import ServicesOne from "./ServicesOne"
import WhyChoose from "./WhyChoose"
import Project from "./Project"
import About from './AboutSection';
import Features from './Features';
import Team from './Team';
import WhyareweSec from './WhyAreWeSec';
import Brand from './Brand';
import Blog from './Blog';
import TestimonialsSection from './TestimonialsSection';
import FAQsection from './FAQsection';



const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<ServicesOne />
			<WhyChoose />
			<Project />
			<Brand />
			<About />
			<Features />
			<Team/>
			<WhyareweSec />
			<FAQsection />
			<TestimonialsSection />
			 <Blog/>
		</React.Fragment>
	);
}

export default HomeMain;