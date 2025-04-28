import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/resources/logo-2.png'; // Import your logo image here

const Sidebar = ({ isSidebar, handleSidebar }) => {
    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : "close-sidebar"}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleSidebar} />
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <span className="close-side-widget" onClick={handleSidebar}>X</span>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
                                </div>
                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form action="assets/inc/sendemail.php" className="contact-form-validated" noValidate="novalidate">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required="" />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button type="submit" className="thm-btn form-inner__btn">Submit Now</button>
                                        </div>
                                    </form>
                                    <div className="result" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
