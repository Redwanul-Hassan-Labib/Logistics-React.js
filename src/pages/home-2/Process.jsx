import React from 'react';
import ProcessOne from '../../components/HomeTwo/ProcessOne';
import processShapeImage from '../../assets/images/shapes/process-one-shape-1.png';

const processOneData = {
    tagline: 'Work Process',
    title: 'Your trusted logistics a <br /> provider for success',
    processes: [
        {
            shapeImage: processShapeImage,
            title: 'Seamless Supply Chain',
            iconClass: 'icon-crane',
            description: 'Logistic service in implementation and control the efficient'
        },
        {
            shapeImage: processShapeImage,
            title: 'Reliable Distribution',
            iconClass: 'icon-shipping',
            description: 'Logistic service in implementation and control the efficient'
        },
        {
            shapeImage: processShapeImage,
            title: 'Fast and reliable logistics',
            iconClass: 'icon-postbox',
            description: 'Logistic service in implementation and control the efficient'
        }
    ]
};

const Process = () => {
    return (
        <>
            <ProcessOne {...processOneData} />
        </>
    );
};

export default Process;
