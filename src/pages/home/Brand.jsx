import React from 'react';
import BrandSlider1 from '../../components/slider/BrandSlider1'
import CounterUp from 'react-countup'; // Make sure you have this installed

const Brand = ( ) => {
    
    return (
        <>
            {/*Brand One Start*/}
            <section className="brand-one">
              <div className="container">
                <p className="brand-one__text count-box">
                  Join the{" "}
                  <CounterUp end={150} />
                  <span>+</span> companies trusting maxline company
                </p>
                <BrandSlider1/>
              </div>
            </section>
            {/*Brand One End*/}
        </>
    );
}
export default Brand;