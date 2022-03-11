import React, { Component } from 'react';
import style from './About.module.css';
export default class About extends Component {
    render() {
        return (
            <>
                <section className={`${style.sectionAbout} py-5`}>
                    <div className="container">
                        <div className="tittle text-center  pt-5">
                            <h2 className={style.h2About}>ABOUT</h2>
                            <div className="star d-flex justify-content-center align-items-center">
                                <div className={`line ${style.line}`} ></div>
                                <div className="icon px-3">
                                    <i className="fa fa-star fa-2x text-white"></i>
                                </div>
                                <div className={`line ${style.line}`} ></div>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-md-1 offset-md-1"></div>
                            <div className="col-md-4 text-white fs-5">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>

                            <div className="col-md-4 text-white fs-5">
                                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
