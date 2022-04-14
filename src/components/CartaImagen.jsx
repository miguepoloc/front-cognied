import React from 'react'
import WavesWhite from '../assets/img/shapes/waves-white.svg'
import RocketWhite from '../assets/img/illustrations/rocket-white.png'

const CartaImagen = () => {
  return (
        <>
            <div className="col-lg-7 mb-lg-0 mb-4">
                <div className="card">
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex flex-column h-100">
                                    <p className="mb-1 pt-2 text-bold">Built by developers</p>
                                    <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                                    <p className="mb-5">From colors, cards, typography to complex elements, you will find the full
                                        documentation.</p>
                                    <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="#">
                                        Read More
                                        <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                <div className="bg-gradient-primary border-radius-lg h-100">
                                    <img src={WavesWhite}
                                        className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves" />
                                    <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                        <img className="w-100 position-relative z-index-2 pt-4"
                                            src={RocketWhite} alt="rocket" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}

export default CartaImagen
