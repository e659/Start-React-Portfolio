import React, { Component } from 'react';
import style from './Contact.module.css';

export default class Contact extends Component {
    render() {
        return (
            <>
                <section className="py-5">
                    <div className="container">
                        <div className="tittle text-center  pt-5">
                            <h2 className={style.h2AContact}>CONTACT</h2>
                            <div className="star d-flex justify-content-center align-items-center">
                                <div className={`line ${style.line}`} ></div>
                                <div className="icon px-3">
                                    <i className="fa fa-star fa-2x"></i>
                                </div>
                                <div className={`line ${style.line}`} ></div>
                            </div>
                        </div>
                        <form className="py-5 ">
                            <div className="row mb-3">

                                <div className="col-sm-10">
                                    <input type="text" className={`form-control ${style.input}`} id="name" placeholder="Name"></input>
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col-sm-10">
                                    <input type="email" className={`form-control ${style.input}`} id="inputPassword3" placeholder="EmailAdress"></input>
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col-sm-10">
                                    <input type="number" className={`form-control ${style.input}`} id="inputPassword3" placeholder="PhoneNumber"></input>
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col-sm-10">
                                    <input type="text" className={`form-control ${style.input}`} id="inputPassword3" placeholder="Message"></input>
                                </div>
                            </div>

                            <button type="submit" className={`btn ${style.signInBtn}`}>Send</button>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}
