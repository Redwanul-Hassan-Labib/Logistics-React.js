import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';
import LogoTwo from '../../../assets/images/resources/logo-2.png';

const HeaderStyleTwo = ({ parentMenu, secondParentMenu, activeMenu }) => {
    const [scroll, setScroll] = useState(false);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isSidebar, setIsSidebar] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        if (!isMobileMenu) {
            document.body.classList.add("mobile-menu-visible");
        } else {
            document.body.classList.remove("mobile-menu-visible");
        }
    };

    const handleSidebar = () => {
        setIsSidebar(!isSidebar);
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <React.Fragment>
            <header className={`main-header-two ${scroll ? "fixed-header" : ""}`}>
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__logo">
                                        <Link to="/">
                                            <img src={LogoTwo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <div className="main-menu-two__main-menu-box">
                                        <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                            <i className="fa fa-bars" />
                                        </Link>
                                        <ul className="main-menu__list">
                                            <MenuItems
                                                parentMenu={parentMenu}
                                                secondParentMenu={secondParentMenu}
                                                activeMenu={activeMenu}
                                            />
                                        </ul>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__call-and-btn-box">
                                        <div className="main-menu-two__call">
                                            <div className="main-menu-two__call-icon">
                                                <img src="assets/images/icon/main-menu-two-chat-icon.png" alt="" />
                                            </div>
                                            <div className="main-menu-two__call-number">
                                                <p>Need help?</p>
                                                <h5>
                                                    <Link to="tel:307555-0133">(307) 555-0133</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="main-menu-two__btn-box">
                                            <Link to="/about" className="thm-btn main-menu-two__btn">
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
                <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
                    <div className="sticky-header__content" />
                    <nav className="main-menu main-menu-two">
                        <div className="main-menu-two__wrapper">
                            <div className="container">
                                <div className="main-menu-two__wrapper-inner">
                                    <div className="main-menu-two__left">
                                        <div className="main-menu-two__logo">
                                            <Link to="/">
                                                <img src={LogoTwo} alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="main-menu-two__main-menu-box">
                                            <Link to="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                <i className="fa fa-bars" />
                                            </Link>
                                            <ul className="main-menu__list">
                                                <MenuItems
                                                    parentMenu={parentMenu}
                                                    secondParentMenu={secondParentMenu}
                                                    activeMenu={activeMenu}
                                                />
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="main-menu-two__right">
                                        <div className="main-menu-two__call-and-btn-box">
                                            <div className="main-menu-two__call">
                                                <div className="main-menu-two__call-icon">
                                                    <img src="assets/images/icon/main-menu-two-chat-icon.png" alt="" />
                                                </div>
                                                <div className="main-menu-two__call-number">
                                                    <p>Need help?</p>
                                                    <h5>
                                                        <Link to="tel:307555-0133">(307) 555-0133</Link>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="main-menu-two__btn-box">
                                                <Link to="/about" className="thm-btn main-menu-two__btn">
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
                <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
            </header>
        </React.Fragment>
    );
};

export default HeaderStyleTwo;
