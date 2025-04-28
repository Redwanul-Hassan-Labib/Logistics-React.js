import React from 'react';
import ServicesTwo from '../../components/HomeTwo/ServicesTwo';

const servicesData = [
    {
        icon: 'postbox',
        title: 'Fast and reliable logistics solutions',
        text: 'Logistic service involves implementation and control of the efficient',
        link: '/express-freight-solutions',
        animation: 'fadeInLeft',
    },
    {
        icon: 'container',
        title: 'Bridges Construction is an essential industry',
        text: 'Logistic service involves implementation and control of the efficient',
        link: '/speedy-dispatch',
        animation: 'fadeInUp',
    },
    {
        icon: 'crane',
        title: 'That involves building and designing structures',
        text: 'Logistic service involves implementation and control of the efficient',
        link: '/quick-move-logistics',
        animation: 'fadeInRight',
    },
];

const Services = () => {
    return (
        <>
            <ServicesTwo services={servicesData} />
        </>
    );
};

export default Services;
