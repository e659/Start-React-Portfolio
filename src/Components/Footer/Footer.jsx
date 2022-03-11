import React, { Component } from 'react';
import style from './Footer.module.css';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className={`${style.footer} py-5 text-center`} >
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-4">
                                <div className="location">
                                    <h3 className="fs-4">LOCATION</h3>
                                    <h4 className="fs-6 pt-3">2215 John Daniel Drive</h4>
                                    <h4 className="fs-6">Clark, MO 65243</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={`${style.social}`}>
                                    <h4 className="fs-4">AROUND THE WEB</h4>
                                    <div className={`${style.socialMedia} pt-2`}>
                                        <i className={`${style.socialMediaIcone} fa fa-facebook fa-1x`}></i>
                                        <i className={`${style.socialMediaIcone} fa fa-twitter fa-1x `}></i>
                                        <i className={`${style.socialMediaIcone} fa fa-linkedin fa-1x`}></i>
                                        <i className={`${style.socialMediaIcone} fa fa-instagram fa-1x`}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="freelance">
                                    <h4 className="fs-4">ABOUT FREELANCER</h4>
                                    <p className="pt-2">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className={`${style.secondFooter} py-3 pt-4 text-white`}>
                    <div className="container">
                        <div className="copyright text-center">
                            <p>Copyright © Your Website 2021</p>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}
