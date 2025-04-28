import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
    const { pageTitle, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

    const breadcrumbsImgStyle = {
        backgroundImage: `url(${breadcrumbsImg})`
    }

    return (
        <>
            {/*Page Header Start*/}
            <section className="page-header">
                <div
                className="page-header__bg"
                style={breadcrumbsImgStyle}></div>
                <div className="container">
                <div className="page-header__inner">
                    <h2>{pageTitle ? pageTitle : 'Breadcrumbs'}</h2>
                    <div className="thm-breadcrumb__box">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li>
                                <Link to="/" className="active">{parentCategory ? parentCategory : 'Home'}</Link>
                            </li>
                            <li><span className="icon-angle-left"></span></li>
                            {pageCategory ? (
                                <>
                                    <li>
                                        <Link to="/" className="active">{pageCategory}</Link>
                                    </li>
                                    
                                    <li>{pageName ? pageName : 'Page Name'}</li>
                                </>
                            ) : (
                                <li>{pageName ? pageName : 'Page Name'}</li>
                            )}
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            {/*Page Header End*/}
        </>
    );
}

export default SiteBreadcrumb;
