import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import SearchPopup from './SearchPopup';
import Sidebar from './Sidebar';
import navImg from "../../../assets/images/resources/logo-1.png";

const Header = (props) => {
    const { parentMenu, secondParentMenu, activeMenu } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        if (!isMobileMenu) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    }

    const handlePopup = () => {
        setIsPopup(!isPopup);
    }

    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <React.Fragment>
            <header className={`main-header ${isVisible ? "fixed-header" : ""}`}>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link to="/">
                                            <img src={navImg} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars" />
                                        </div>
                                        <ul className="main-menu__list">
                                            <MenuItems
                                                parentMenu={parentMenu}
                                                secondParentMenu={secondParentMenu}
                                                activeMenu={activeMenu}
                                            />
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__search-nav-sidebar-btn-box">
                                        <div className="main-menu__search-box" onClick={handlePopup}>
                                            <div className="main-menu__search search-toggler fas fa-search" />
                                        </div>
                                        <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                                            <div className="navSidebar-button">
                                                <span className="icon-dots-menu-one" />
                                                <span className="icon-dots-menu-two" />
                                                <span className="icon-dots-menu-three" />
                                            </div>
                                        </div>
                                        <div className="main-menu__btn-box">
                                            <Link to="/about" className="thm-btn main-menu__btn">
                                                Read more
                                                <span />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={`stricky-header stricked-menu main-menu ${isVisible ? "stricky-fixed" : ""}`}>
                    <div className="sticky-header__content" />
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="container">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-menu__left">
                                        <div className="main-menu__logo">
                                            <Link to="/">
                                                <img src={navImg} alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="main-menu__main-menu-box">
                                            <div className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                <i className="fa fa-bars" />
                                            </div>
                                            <ul className="main-menu__list">
                                                <MenuItems
                                                    parentMenu={parentMenu}
                                                    secondParentMenu={secondParentMenu}
                                                    activeMenu={activeMenu}
                                                />
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-menu__right">
                                        <div className="main-menu__search-nav-sidebar-btn-box">
                                            <div className="main-menu__search-box" onClick={handlePopup}>
                                                <div className="main-menu__search search-toggler fas fa-search" />
                                            </div>
                                            <div className="main-menu__nav-sidebar-icon" onClick={handleSidebar}>
                                                <div className="navSidebar-button">
                                                    <span className="icon-dots-menu-one" />
                                                    <span className="icon-dots-menu-two" />
                                                    <span className="icon-dots-menu-three" />
                                                </div>
                                            </div>
                                            <div className="main-menu__btn-box">
                                                <Link to="/about" className="thm-btn main-menu__btn">
                                                    Read more
                                                    <span />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
            <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
            <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        </React.Fragment>
    );
}

export default Header;
