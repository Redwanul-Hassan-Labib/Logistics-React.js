import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMain = ( ) => {
    return (
        <>
            {/*Error Page Start*/}
                <section className="error-page">
                    <div className="error-page-shape-one float-bob-x">
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                        <div className="error-page__inner">
                            <div className="error-page__title-box">
                            <h2 className="error-page__title">404</h2>
                            </div>
                            <h3 className="error-page__tagline">
                            Sorry we can't find that page!
                            </h3>
                            <p className="error-page__text">
                            The page you are looking for was never existed.
                            </p>
                            <form className="error-page__form">
                            <div className="error-page__form-input">
                                <input type="search" placeholder="Search here" />
                                <button type="submit">
                                <i className="fas fa-search" />
                                </button>
                            </div>
                            </form>
                            <Link to="/" className="thm-btn error-page__btn">
                            Back to home <span />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            {/*Error Page End*/}
        </>


    );
}

export default ErrorMain;