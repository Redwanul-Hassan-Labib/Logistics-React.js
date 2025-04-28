import FooterStyleTwo from '../Layout/Footer/FooterStyleTwo';
import FooterLogoTwo from '../../assets/images/resources/footer-logo-2.png';

const footerData = {
    newsletterUrl: "MC_FORM_URL",
    logoSrc: FooterLogoTwo,
    aboutText: "It is a long established fact that a reader will be distracted Empowering",
    socialLinks: [
        { url: "#", icon: "instagram" },
        { url: "#", icon: "facebook-f" },
        { url: "#", icon: "Vector" },
        { url: "#", icon: "linkedin-in" }
    ],
    services: [
        { name: "Express Freight Solutions", link: "/express-freight-solutions" },
        { name: "Rapid Delivery Services", link: "/quick-move-logistics" },
        { name: "Speedy Haulage", link: "/speedy-dispatch" },
        { name: "Reliable Transporters", link: "/on-point-distribution" },
        { name: "Swift Ship Solutions", link: "/swift-supply-chain" }
    ],
    contactInfo: [
        { icon: "envolop email-icon", text: "debra.holt@example.com", link: "mailto:debra.holt@example.com" },
        { icon: "location location-icon", text: "3891 Ranchview Dr. Richardson" },
        { icon: "call phone-call", text: "01245789321, 012457895146", link: "tel:01245789321" }
    ],
    bottomMenu: [
        { text: "Trams & Condition", link: "/about" },
        { text: "Privacy Policy", link: "/about" },
        { text: "Contact Us", link: "/contact" }
    ],
    copyrightText: "© Yoursitename 2024 | All Rights Reserved"
};

const FooterTwo = () => {
    return (
        <>
            {/*Site Footer Start*/}
            <FooterStyleTwo {...footerData} />
            {/*Site Footer End*/}
        </>
    );
};

export default FooterTwo;
