import React from 'react';
import WhyAreWe from '../../components/About/WhyAreWe';
import image1 from '../../assets/images/resources/why-are-we-img-1.jpg';
import image2 from '../../assets/images/resources/why-are-we-img-2.jpg';




const WhyAreWeSec = ( ) => {
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
        
        <>
        <WhyAreWe
            imageSrc1={image1}
            imageSrc2={image2}
            tagline="Why are we best"
            title="Efficiency at its best with our logistics services"
            points={points}
            year="Since 1920"
            yearDescription="Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage"
        />
        </>


    );
}

export default WhyAreWeSec;
