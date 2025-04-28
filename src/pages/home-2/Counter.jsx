import React from 'react';
import CounterTwo from '../../components/HomeTwo/CounterTwo';
import counterImage from '../../assets/images/resources/counter-two-img-1.jpg';

const counterData = {
    image: counterImage,
    sinceYear: 'Since 1920',
    counters: [
        { end: 100, unit: '', iconClass: 'icon-schedule', text: 'Our Happy Customer' },
        { end: 100, unit: '', iconClass: 'icon-fragile', text: 'Our Happy Customer' },
        { end: 20, unit: 'k', iconClass: 'icon-conveyor-1', text: 'Our Happy Customer' },
        { end: 200, unit: '', iconClass: 'icon-clock', text: 'Our Happy Customer' }
    ]
};

const Counter = () => {
    return (
        <>
            <CounterTwo {...counterData} />
        </>
    );
};

export default Counter;
