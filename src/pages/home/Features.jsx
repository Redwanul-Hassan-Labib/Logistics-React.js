import React from 'react';
import CounterOne from '../../components/About/CounterOne';
import videoImg from '../../assets/images/resources/counter-one-img-1.jpg';
const counters = [
  { iconClass: 'icon-schedule', end: 100, suffix: '+', text: 'Our Happy Customers' },
  { iconClass: 'icon-schedule', end: 2, suffix: 'k', plus: true, text: 'Our Team Members' },
  { iconClass: 'icon-schedule', end: 3, suffix: 'k', plus: true, text: 'Our Client Reviews' }
];

const Features = ( ) => {
    return (
        
      <>
        {/*Message One Start */}
        <CounterOne
            imageSrc={videoImg}
            videoId="jNQXAC9IVRw" // YouTube video ID
            videoCaption="Watch our video"
            tagline="Our Features"
            title="Simplifying your logistics of the challenges"
            description="Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials."
            counters={counters}
        />
        {/*Message One End */}
      </>
      


    );
}

export default Features;