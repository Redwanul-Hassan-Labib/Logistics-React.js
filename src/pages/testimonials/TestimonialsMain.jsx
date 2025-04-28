import React from 'react';
import TestimonialCard from '../../components/Testimonial/TestimonialCard ';
import NafizBhuiyan from '../../assets/images/testimonial/testimonial-1-1.jpg';
import RobertSon from '../../assets/images/testimonial/testimonial-1-2.jpg';
import HarbertSpin from '../../assets/images/testimonial/testimonial-1-3.jpg';
import MaintoVula from '../../assets/images/testimonial/testimonial-1-4.jpg';
import NafizBhuiyan2 from '../../assets/images/testimonial/testimonial-1-1.jpg';
import RobertSon2 from '../../assets/images/testimonial/testimonial-1-2.jpg';
const TestimonialsMain = () => {
    const testimonials = [
        {
            imageUrl: NafizBhuiyan,
            clientName: 'Nafiz Bhuiyan',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        {
            imageUrl: RobertSon,
            clientName: 'Robert Son',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        {
            imageUrl: HarbertSpin,
            clientName: 'Harbert Spin',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        {
            imageUrl: MaintoVula,
            clientName: 'Mainto Vula',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        {
            imageUrl: NafizBhuiyan2,
            clientName: 'Nafiz Bhuiyan',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        {
            imageUrl: RobertSon2,
            clientName: 'Robert Son',
            clientTitle: 'Manager',
            rating: 5,
            testimonialText: 'Logistic service involves the planning, implementation, and control of the efficient and effective movement and storage of goods and materials.',
        },
        // Add more testimonials as needed
    ];

    return (
        <section className="testimonials-page">
            <div className="container">
                <div className="row">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            imageUrl={testimonial.imageUrl}
                            clientName={testimonial.clientName}
                            clientTitle={testimonial.clientTitle}
                            rating={testimonial.rating}
                            testimonialText={testimonial.testimonialText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsMain;
