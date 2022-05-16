import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { FaArrowRight, FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'

import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import ganso_leyendo from "../../assets/img/ganso/ganso_leyendo.png"
import ganso_celular from "../../assets/img/ganso/ganso_celular.png"

import situacion1 from "../../assets/img/situaciones/situacion_1.png"
import situacion2 from "../../assets/img/situaciones/situacion_2.png"

import situacion3 from "../../assets/img/situaciones/situacion_3.png"

const Quimica = () => {
  const [retroPrimera, setRetroPrimera] = useState(null)
  const [retroSegunda, setRetroSegunda] = useState(null)
  const [retroTercera, setRetroTercera] = useState(null)
  const [validate, setValidate] = useState(false);
  const [emociones, setEmociones] = useState(null);

  const handleSubmit = () => {

  }

  const handleBtnClickSend = () => {
    setValidate(true);
  }
  const handleOnChange = () => {
    if (validate)
      setValidate(false);
  }

  const getEmociones = async () => {
    const url = 'http://localhost:8000/api/definiciones/'
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      console.log(data)
      return data
    } else {
      console.log('No se pudieron traer los datos de las Definiciones...')
      return null
    }
  }

  useEffect(async () => {
    let response = await getEmociones()
    console.log(response)
    if (response !== null) {
      setEmociones(response)
    }
  }, [])

  return (
    <div style={{ backgroundColor: "#f1feff" }}>
      <div className="row">
        <div className="col" style={{ backgroundColor: "#f1feff" }}>
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 " style={{ backgroundColor: "#f1feff" }}>
            <div className="d-flex align-middle">
              <img
                style={{ width: "150px", height: "150px" }}
                className="card-img-left  justify-content-center align-self-center "
                src={ganso_celular}
              />
            </div>
            <div className="card-body d-flex flex-column align-items-start justify-content-center" style={{ backgroundColor: "#f1feff" }}>
              <h5 className="card-title"> Actividad 3.1</h5>
              <p className="card-text">
                ¡Ya tenemos las bases para la identificación de las emociones y su comprensión a partir de darles nombre de acuerdo a lo que vivimos! Ahora hay que analizar cómo nos impactan en nuestro día a día. ¿Las emociones en determinados niveles pueden influir en nuestras acciones? ¡Claro que sí! Y es justo lo que nos pondrá a pensar el siguiente ejercicio.
              </p>
              <p className="card-text">
                A continuación, veras un cuadro describiendo una situación. El objetivo del ejercicio es que selecciones de la lista de emociones, las mismas que ya nombraste, cual consideras que podrían ayudarte en esa situación. Puede ser una o dos emociones máximo que elijas, pero, aquí un punto importante: debajo de esto debes indicar en qué nivel consideras que podría ayudar. No es lo mismo a que tengas ira en un nivel bajo a un nivel alto. Luego, escribe brevemente porque crees que esa emoción o emociones podrían ayudar. ¡Adelante!
                <br />
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <b>Tip importante: </b>
          <p className="card-text">
            Cada ejercicio te indicara si es así si debes usar una o dos emociones.
          </p>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="d-flex align-middle">
                <img
                  style={{ height: "400px" }}
                  className="card-img-left  justify-content-center align-self-center "
                  src={situacion1}
                />
              </div>
            </div>
            <div className="col">
              <b>Coloca las emociones</b>
              <br></br>
              <Form onSubmit={handleSubmit} className="my-4" >
                <div className="row text-center my-3 align-items-center">
                  <div className='col-6' ><b><h5>Definición</h5></b></div>
                  <div className='col-6' ><b><h5>¿Qué nombre le darías?</h5></b></div>
                </div>
                {emociones && emociones.map(({ id, emociones }, i) =>
                  <div className="row text-center my-3 align-items-center">
                    <div className='col-md-6 mb-1 mb-md-0' >{emociones}</div>
                    <div className='col-md-6 my-1 my-md-0' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
                  </div>
                )
                }
                <div className="w-100 d-flex mx-md-4 my-4 px-md-3 ">
                  <div className="col-6 d-flex justify-content-end">
                    <Button type="submit" className="btn btn-naranja" onClick={handleBtnClickSend} >Enviar <FaPaperPlane /></Button>
                  </div>
                </div>

              </Form>

            </div>

          </div>
        </div>
        {retroPrimera && <div className="col">
          <p>{retroPrimera}</p>
        </div>}
      </div>
    </div >
  )
}

export { Quimica }