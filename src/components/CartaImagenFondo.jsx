import React from 'react'

const CartaImagen = () => {
  return (
        <>
            <div className="col-lg-5">
                <div className="card h-100 p-3">
                    <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100 carta-dashboard2">
                        <span className="mask bg-gradient-dark"></span>
                        <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                            <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
                            <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about
                                who take the opportunity first.</p>
                            <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="#">
                                Read More
                                <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CartaImagen
