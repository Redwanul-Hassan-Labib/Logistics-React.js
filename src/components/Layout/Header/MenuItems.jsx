import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu, activeMenu } = props;

    return (
        <React.Fragment>
            <li className={parentMenu === 'Home' ? 'dropdown current-menu-item' : ''}>
            <Link to="/" className={activeMenu === "/home-1"  ? "active-menu" : ""}>Home</Link>
                {/* <ul className="sub-menu">
                    <li>
                        <Link to="/" className={activeMenu === "/home-1"  ? "active-menu" : ""}>Home One</Link>
                    </li>
                    <li>
                        <Link to="/home-2" className={activeMenu === "/home-2" ? "active-menu" : ""}>Home Two</Link>
                    </li>

                    <li className={secondParentMenu === 'Home' ? 'dropdown current-menu-item' : 'dropdown'}>
                        <Link to="#">Header Style</Link>
                        <ul className="sub-menu right ">
                            <li>
                                <Link to="/" className={activeMenu === "/" ? "active-menu" : ""}>Header One</Link>
                            </li>
                            <li>
                                <Link to="/home-2" className={activeMenu === "/home-2" ? "active-menu" : ""}>Header Two</Link>
                            </li>
                        </ul>
                    </li>
                </ul> */}
            </li>
            <li className={parentMenu === 'about' ? 'current-menu-item' : ''}>
                <Link to="/about" className={activeMenu === "/about" ? "active-menu" : ""}>About</Link>
            </li>
            <li className={parentMenu === 'page' ? 'dropdown current-menu-item' : 'dropdown'}>
              <Link to="/team" className={activeMenu === "/team" ? "active-menu" : ""}>Team</Link>
                <ul className="sub-menu">
                {/* <li>
                    <Link to="/team-carousel" className={activeMenu === "/team-carousel" ? "active-menu" : ""}>Team Carousel</Link>
                </li> */}
                <li>
                    <Link to="/team-details" className={activeMenu === "/team-details" ? "active-menu" : ""}>Team Details</Link>
                </li>
                <li>
                    <Link to="/testimonials" className={activeMenu === "/testimonials" ? "active-menu" : ""}>Testimonials</Link>
                </li>
                <li>
                    <Link to="/faq" className={activeMenu === "/faq" ? "active-menu" : ""}>Faq</Link>
                </li>
                <li>
                    <Link to="/error" className={activeMenu === "/error" ? "active-menu" : ""}>404 Error</Link>
                </li>
                </ul>
            </li>
            <li className={parentMenu === 'Services' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Services</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/services" className={activeMenu === "/services" ? "active-menu" : ""}>Services</Link>
                    </li>
                    <li>
                        <Link to="/services-carousel" className={activeMenu === "/services-carousel" ? "active-menu" : ""}>Services Carousel</Link>
                    </li>
                    <li>
                        <Link to="/express-freight-solutions" className={activeMenu === "/express-freight-solutions" ? "active-menu" : ""}>Express Freight Solutions</Link>
                    </li>
                    {/* <li>
                        <Link to="/quick-move-logistics" className={activeMenu === "/quick-move-logistics" ? "active-menu" : ""}>Quick Move Logistics</Link>
                    </li>
                    <li>
                        <Link to="/speedy-dispatch" className={activeMenu === "/speedy-dispatch" ? "active-menu" : ""}>Speedy Dispatch</Link>
                    </li>
                    <li>
                        <Link to="/swift-supply-chain" className={activeMenu === "/swift-supply-chain" ? "active-menu" : ""}>Swift Supply Chain</Link>
                    </li>
                    <li>
                        <Link to="/on-point-distribution" className={activeMenu === "/on-point-distribution" ? "active-menu" : ""}>On Point Distribution</Link>
                    </li> */}
                </ul>
            </li>
            <li className={parentMenu === 'Project' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Projects</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/project" className={activeMenu === "/project" ? "active-menu" : ""}>Project</Link>
                    </li>
                    <li>
                        <Link to="/project-details" className={activeMenu === "/project-details" ? "active-menu" : ""}>Project Details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'blog' ? 'dropdown current-menu-item' : 'dropdown'}>
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                    <li>
                        <Link to="/blog" className={activeMenu === "/blog" ? "active-menu" : ""}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/blog-details" className={activeMenu === "/blog-details" ? "active-menu" : ""}>Blog details</Link>
                    </li>
                </ul>
            </li>
            <li className={parentMenu === 'contact' ? 'current-menu-item' : ''}>
                <Link to="/contact" className={activeMenu === "/contact" ? "active-menu" : ""}>Contact</Link>
            </li>
            
        </React.Fragment>
    );
}

export default MenuItems;