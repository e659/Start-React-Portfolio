import React, { Component } from 'react';
import style from './Home.module.css';
import AvaterImg from '../images/avatar.svg';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {

        return (
            <>
                {/* start heading */}

                <header className="min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="text-center">
                            <div className="avatar-img">
                                <img src={AvaterImg} alt="" className="w-25" />
                            </div>
                            <div className="tittle text-white">
                                <h2 className={style.h2Home}>START REACT</h2>
                                <div className="star d-flex justify-content-center align-items-center">
                                    <div className={`line ${style.line}`} ></div>
                                    <div className="icon px-3">
                                        <i className="fa fa-star fa-2x"></i>
                                    </div>
                                    <div className={`line ${style.line}`} ></div>
                                </div>
                                <h2 className={`${style.homeP}pt-5 fs-4 fw-normal`}>Graphic Artist - Web Designer - Illustrator</h2>
                            </div>
                        </div>
                    </div>
                </header>
                {/* end heading */}
            </>
        );
    }
}
