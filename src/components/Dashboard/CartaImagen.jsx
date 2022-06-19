import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const CartaImagen = () => {
  return (
    <>
      <div className="col-lg-7 mb-lg-0 mb-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="row">
              <div className="col-lg-3 ms-auto text-center mt-5 mt-lg-0">
                <img className="w-80 position-relative z-index-2 pt-4"
                  src={imgGanso.celular} alt="ganso" />
              </div>
              <div className="col-lg-9">
                <div className="d-flex flex-column h-100">
                  <h5 className="font-weight-bolder">Bienvenido a tu Dashboard</h5>
                  <p >Este es un espacio para manejar tu
                    información, registrar y evaluar lo que
                    has realizado y seguir practicando los
                    puntos importantes en los que
                    DigitalMente te quiere apoyar</p>
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
