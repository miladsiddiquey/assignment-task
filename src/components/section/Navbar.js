import React from 'react';
import Style from '../../style/Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand fs-2 fw-bold " href="#">ueno.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active fs-6 fw-bold me-3" aria-current="page" href="#">SERVICE </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fs-6 fw-bold me-3" aria-current="page" href="#">CLIENTS </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fs-6 fw-bold me-3" aria-current="page" href="#">CAREERS </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  fs-6 fw-bold me-3" aria-current="page" href="#">ABOUT </a>
                            </li>
                            <button className={`${Style.btnStyle} btn `}>CONTACT</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;