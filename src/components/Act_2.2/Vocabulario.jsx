import React, { useState, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import ganso_elegante from "../../assets/img/ganso/ganso_elegante.png"
import ganso_leyendo from "../../assets/img/ganso/ganso_leyendo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faClipboardCheck, faGear, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export const Vocabulario = () => {

  const [validate, setValidate] = useState(false);

  const [isThereInformation, setIsThereInformation] = useState(false);
  const [userClickModifyBtn, setUserClickModifyBtn] = useState(false);

  const handleSubmit = () => {

  }

  const handleCancelModify = () => {
    setUserClickModifyBtn(false);
    setIsThereInformation(false);
  }

  const handleModify = () => {
    setIsThereInformation(true);
    setUserClickModifyBtn(true);
  }

  const handleBtnClickSend = () => {
    setValidate(true);
  }
  const handleOnChange = () => {
    if (validate)
      setValidate(false);
  }

  return (
    <div className="container">
      {isThereInformation ? (<><div className="row">
        <div className="col">
          <div className="card flex-md-row mb-2 box-shadow h-md-250 px-4  py-4 mt-3 ">
            <div className="d-flex align-middle">
              <img
                style={{ width: "150px", height: "150px" }}
                className="card-img-left  justify-content-center align-self-center "
                src={ganso_elegante}
              />
            </div>
            <div className="card-body d-flex flex-column align-items-start justify-content-center">
              <h5 className="card-title"> Actividad 2.1</h5>
              <p className="card-text">
                Darle nombre a lo que experimentamos es un paso importante para saber gestionar nuestras emociones. En vez de darte una lista de definiciones y conceptos teóricos, queremos que tú nos des tu concepto, nombre o como llamarías a algunas experiencias emocionales.
              </p>
              <p className="card-text">
                Para eso, a continuación, encontraras una lista de definiciones* y queremos que tú le coloques el nombre. ¿Cómo lo llamas tu normalmente o como lo llamarías? Es importante que sea algo breve que te permite identificarlo. Nombre del ganso te recuerda que leas muy bien cada definición y recuerdes el nombre que le darás. ¡Sera importante para la siguiente parte!
                <br /><small><i><b>*Tomadas de la RAE.</b></i></small>
              </p>

            </div>
          </div>
        </div>
        <div className="w-100"></div>
      </div>
        <Form onSubmit={handleSubmit} className="my-4" validated={validate}>
          <div className="row text-center my-3 align-items-center">
            <div className='col-6' ><b><h5>Definición</h5></b></div>
            <div className='col-6' ><b><h5>¿Qué nombre le darías?</h5></b></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Falta de gana, interés o deseo.</div>
            <div className='col-md-6 my-1 my-md-0' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Propensión a ver y juzgar las cosas en su aspecto más favorable.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Exaltación y fogosidad del ánimo, excitado por algo que lo admire o cautive.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Sentimiento de insatisfacción o fracaso.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Rechazar algo, no aceptarlo.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Sensación que proviene de un acontecimiento repentino e imprevisto.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Temor o miedo muy grandes.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Falta de seguridad.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Falta de serenidad.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Estado de ánimo de desorientación y perplejidad.</div>
            <div className='col-md-6 my-1 my-md-0 ' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="row text-center my-3 align-items-center">
            <div className='col-md-6 mb-1 mb-md-0' >Ira exaltada o elevada.</div>
            <div className='col-md-6 my-1 my-md-0' ><Form.Control className="bg-white text-center" type="text" placeholder="¿Qué nombre le darías?" required="required" onChange={handleOnChange} /></div>
          </div>
          <div className="w-100 d-flex mx-md-4 my-4 px-md-3 ">

            {userClickModifyBtn ? (<>
            <div className="col-6 d-flex justify-content-start">
              <Button className="btn btn-naranja" onClick={handleCancelModify} > <FontAwesomeIcon icon={faClipboardCheck} /> Dejar como estaba</Button>
            </div>  
            <div className="col-6 d-flex justify-content-end">
                <Button type="submit" className="btn btn-naranja" onClick={handleBtnClickSend} >Enviar <FontAwesomeIcon icon={faPaperPlane} /></Button>
            </div></>) : (
            <div className='d-flex justify-content-center justify-content-md-end'>
                <Button type="submit" className="btn btn-naranja" onClick={handleBtnClickSend} >Enviar</Button>
              </div>)}


          </div>

        </Form>
      </>) : (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img src={ganso_leyendo} width="307" height="307"></img>
              <h5 className='my-4 text-center'>Uhm... Parece que ya he personalizado tu vocabulario anteriormente.</h5>
            </div>
            <div className="w-100 d-flex mx-md-4 my-4 px-md-3 ">
              <div className="col-6 d-flex justify-content-start">
                <Button className="btn btn-naranja" onClick={handleModify} > <FontAwesomeIcon icon={faGear} /> <b>Modificar</b> </Button>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <Button className="btn btn-naranja"><b>Siguiente Ejercicio</b> <FontAwesomeIcon icon={faArrowRight} /></Button>
              </div>
            </div>


          </div>
        </>
      )}

    </div>
  )
}
