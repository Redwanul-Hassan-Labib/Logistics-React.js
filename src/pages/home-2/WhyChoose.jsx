import React from 'react';
import WhyChooseTwo from '../../components/HomeTwo/WhyChooseTwo';
import whyChooseBg from '../../assets/images/backgrounds/why-choose-two-bg.jpg';

const whyChooseData = {
    backgroundImage: whyChooseBg,
    phone: '01959701730',
    title: (
        <>
            Delivering excellence <br />
            every time Express <br />
            Logistics
        </>
    ),
    text: (
        <>
            Construction is an essential industry that involves building <br />
            and designing structures such as buildings, roads, bridges. <br />
            Construction is an essential industry that involves building <br />
            and designing structures such as these.
        </>
    ),
    readMoreLink: '/about',
    sinceYear: 'Since 1920'
};

const WhyChoose = () => {
    return (
        <>
            <WhyChooseTwo {...whyChooseData} />
        </>
    );
};

export default WhyChoose;
