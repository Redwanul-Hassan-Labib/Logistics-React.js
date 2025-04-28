// Import the TestimonialCard component
import TestimonialSlider1 from '../../components/slider/TestimonialSlider1';
import testimonialoneimg from '../../assets/images/testimonial/testimonial-one-img-1.jpg';


const TestimonialsSection = () => {
  

  return (
    <>
    {/*Testimonial One Start*/}
    <section className="testimonial-one">
          <div className="container">
            <div className="testimonial-one__inner">
              <div className="testimonial-one__img-one">
                <img
                  src={testimonialoneimg}
                  alt=""
                />
              </div>
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">clients testimonial</span>
                </div>
                <h2 className="section-title__title">
                  Your supply chain partner
                  <br /> for success
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-5" />
                <div className="col-xl-7 col-lg-9">
                  <div className="testimonial-one__right">
                    <TestimonialSlider1/>
                  </div>
                </div>
              </div>
              <div className="testimonial-one__dot-style">
                <div className="swiper-dot-style1" />
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
    </>
  );
};

export default TestimonialsSection;
