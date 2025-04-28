import React from 'react';
import ServiceItem from '../../components/Service/ServiceItem';



const ServicesMain = () => {
    const services = [
        { iconClass: 'icon-postbox', title: 'Fast and reliable logistics solutions', link: '/express-freight-solutions' },
        { iconClass: 'icon-customer-service', title: 'Bridges Construction is an essential industry', link: '/quick-move-logistics' },
        { iconClass: 'icon-container', title: 'That involves building and designing structures', link: '/speedy-dispatch' },
        { iconClass: 'icon-shipping', title: 'Logistics expertise for your competitive advantage', link: '/swift-supply-chain' },
        { iconClass: 'icon-crane', title: 'Delivering success through logistics', link: '/on-point-distribution' },
        { iconClass: 'icon-conveyor-1', title: 'Simplifying your logistics challenges', link: '/express-freight-solutions' },
        { iconClass: 'icon-postbox', title: 'Efficiency at its best, with our logistics services', link: '/quick-move-logistics' },
        { iconClass: 'icon-clock', title: 'Seamless logistics for your business needs', link: '/speedy-dispatch' },
        { iconClass: 'icon-fragile', title: 'Your supply chain partner for success', link: '/swift-supply-chain' },
    ];

    return (
        <React.Fragment>
            <section className="services-page">
                <div className="container">
                    <div className="row">
                        {services.map((service, index) => (
                            <div key={index} className="col-xl-4 col-lg-4">
                                <ServiceItem
                                    iconClass={service.iconClass}
                                    title={service.title}
                                    link={service.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServicesMain;
