import React from 'react'
import { imgGanso } from '../../helpers/helper_imagen_ganso'

const CartaImagen = () => {
  return (
    <>
      <div className="col-12 col-lg-6 mt-2">
        <div className="card items_modulos_inicio" style={{backgroundColor: "antiquewhite"}}>
          <div className="card-body p-3">
            <div className="row justify-content-center align-items-center">
              <div className=" d-none d-lg-block col-3 text-center ">
                <img className=" w-100  "
                  src={imgGanso.celular} alt="ganso" />
              </div>
              <div className="col-12 col-lg-9">
                <div className="d-flex flex-column pt-2 justify-content-center">
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
