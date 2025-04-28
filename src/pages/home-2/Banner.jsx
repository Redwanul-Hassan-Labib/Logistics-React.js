import React from 'react';
import BannerOne from '../../components/HomeTwo/BannerOne';
import banneroneimg from '../../assets/images/resources/banner-one-img-1.jpg';
import bannerTwoimg from '../../assets/images/resources/banner-one-img-2.jpg';
import banneroneshape from '../../assets/images/shapes/banner-one-shape-1.png';

const Banner = () => {
    const bannerData = {
        subTitle: "Best Cargo",
        contactNumber: "(307) 555-0133",
        image1: banneroneimg,
        image2: bannerTwoimg,
        readMoreLink: "/about",
        backgroundImage: banneroneshape
    };

    return (
        <BannerOne {...bannerData} />
    );
};

export default Banner;
