import React from 'react';

const TestimonialCard = ({ imageUrl, clientName, clientTitle, rating, testimonialText }) => {
  // Helper function to generate star ratings
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} className={i < rating ? 'icon-star' : 'icon-star last-star'} />);
    }
    return stars;
  };

  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="testimonial-one__single">
        <div className="testimonial-one__quote">
          <span className="icon-quote" />
        </div>
        <div className="testimonial-one__client-img">
          <img src={imageUrl} alt={clientName} />
        </div>
        <div className="testimonial-one__ratting">
          {renderRating()}
        </div>
        <h3 className="testimonial-one__client-name">{clientName}</h3>
        <p className="testimonial-one__client-sub-title">{clientTitle}</p>
        <p className="testimonial-one__text">{testimonialText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
