import React, { Component } from 'react';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <>

                {/* nav */}

                <nav className={`${style.nav} navbar navbar-expand-lg navbar-light fixed-top py-3`}>
                    <div className="container">

                        <Link className="navbar-brand fw-bold fs-3 text-white" to="home">START REACT</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                                <li className="nav-item px-3">
                                    <Link className={`${style.navLink} nav-link fw-bold fs-6 text-white`} to="Portfolio">PORTFOLIO</Link>

                                </li>
                                <li className="nav-item px-3">
                                    <Link className={`${style.navLink} nav-link fw-bold fs-6 text-white`} to="About">ABOUT</Link>
                                </li>
                                <li className="nav-item px-3">
                                    <Link className={`${style.navLink} nav-link fw-bold fs-6 text-white`} to="Contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end nav */}
            </>
        )
    }
}
