import React, { Component } from 'react';
import style from './Portfolio.module.css';
import img1 from "../../Components/images/cabin.png";
import img2 from "../../Components/images/cake.png";
import img3 from "../../Components/images/circus.png";
import img4 from "../../Components/images/game.png";
import img5 from "../../Components/images/safe.png";
import img6 from "../../Components/images/submarine.png";

export default class Portfolio extends Component {
    state = {
        currentIndex: 0,
        images: [img1, img2, img3, img4, img5, img6],


    }

    //getimageSur
    getSrc = (e) => {
        for (var i = 0; i < this.state.images.length; i++) {
            let index = this.state.currentIndex;
            index = e.target.src;
            this.setState({ currentIndex: index });
        }
    }

    render() {

        return (
            <>
                <section className='py-5'>
                    <div className="container ">
                        {/* portfolio tittle */}
                        <div className="tittle text-center pt-5">
                            <h2 className={style.h2APortfo}>PORTFOLIO</h2>
                            <div className="star d-flex justify-content-center align-items-center">
                                <div className={`line ${style.line}`} ></div>
                                <div className="icon px-3">
                                    <i className="fa fa-star fa-2x"></i>
                                </div>
                                <div className={`line ${style.line}`} ></div>
                            </div>
                        </div>
                        {/* gallary */}
                        <div className="row py-5 gy-5 gx-5">
                            {this.state.images.map((image, index) =>
                                <div key={index} className="col-md-4">
                                    <div className={`${style.profImg}`}>
                                        <img onClick={this.getSrc} className={`${style.profileImg} w-100`} src={image} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" />
                                    </div>

                                </div>
                            )}
                        </div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className={`${style.modalDialog} modal-dialog py-5`}>
                                <i className={`${style.modalDialogIcone} fa fa-close fa-2x`}></i>
                                <div className="modal-content border-0 d-flex justify-content-center">
                                    <div className="modal-header m-auto border-0 ">
                                        <div className="tittle">
                                            <h2 className={`${style.popUpTitleH2}`}>LOG CABIN</h2>
                                            <div className="star d-flex justify-content-center align-items-center">
                                                <div className={`line ${style.line}`} ></div>
                                                <div className="icon px-3">
                                                    <i className="fa fa-star fa-2x"></i>
                                                </div>
                                                <div className={`line ${style.line}`} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-body text-center">

                                    <img src={this.state.currentIndex} className={`${style.bodyImg}`}></img>

                                    <p className={`${style.modalBodyP}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                </div>
                                <div className="modal-footer border-0 d-flex justify-content-center">
                                    <button type="button" className={`btn ${style.modalFooterButton}`} data-bs-dismiss="modal">Close Window</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}