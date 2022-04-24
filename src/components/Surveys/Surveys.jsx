import React, { useEffect, useState, useRef } from 'react'
import { Surveys as model_surveys } from '../../assets/js/model_survey/Surveys'
import '../../assets/css/Surveys.scss'
import Survey from './Survey'
import Scroll from '../../helpers/helperScroll'
import swal from 'sweetalert2'

const Surveys = () => {
  window.Swal = swal

  const [surveys, setSurveys] = useState(new model_surveys(null, false))
  const [nextOrPrev, setNextOrPrev] = useState(false) // lo uso para cargar las preguntas si da back.
  const [isBtnSendDisabled, setIsBtnSendDisabled] = useState(false)

  const swalError = () => {
    Swal.fire({
      title: 'Ups...',
      icon: 'error',
      html: 'Parece que alguna pregunta de esta encuesta ha quedado sin responder. por favor, asegurate de que <b> todas </b> las preguntas tengan respuesta ',
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: true,
      focusConfirm: true
    })
  }

  const moveToStart = () => {
    // Scroll.scroll("startSurvey",true);
  }
  /**
     * La funcion se encarga de lanzar la siguiente o anterior encuesta
     * si cumple con los criterios establecidos.
     * @param {boolean} isNext
     */
  const handeButtonNavSurvey = async (isNext = true) => {
    /* bloque de prueba */
    // surveys.selectAllOptionRandom();
    /* fin bloque de prueba */

    if (!surveys.isAllQuestionsSelected() && isNext) {
      swalError()
    }

    const newObjSurveys = isNext ? surveys.nextSurvey() : surveys.prevSurvey()
    if (newObjSurveys) {
      setSurveys(newObjSurveys)
      setNextOrPrev(!nextOrPrev)
    }
  }

  const handleButtonSendSurvey = async () => {
    /* Antes de hacer la peticion, rectifica que todas las preguntas
        de las encuestas tengan respuesta.
      */
    if (surveys.isAllSurveysAnswered()) {
      setIsBtnSendDisabled(() => true)
      // Debería esperar una respuesta de todo ok., si la respuesta es negativa el boton vuelve a quedar
      Swal.fire({
        title: '<strong>Enviando...</strong>',
        imageUrl: 'https://c.tenor.com/u0TyVuvUCCsAAAAM/pato.gif',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Enviando... espere un momento',
        html: 'Tus respuestas estan siendo enviadas y procesadas <b>Espera un momento</b> ',
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: false,
        focusConfirm: false
      })
      // Simulo la demora en responder xd...
      setTimeout(() => {
        setIsBtnSendDisabled(false)
        Swal.close()
        Swal.fire({
          position: 'center',
          icon: 'success',
          html: '¡Enhorabuena! tus respuestas han sido procesadas <b>serás redireccionado en breve.</b> ',
          showConfirmButton: false,
          timer: 4000
        })
      }, 4000)
    } else {
      swalError()
    }
  }

  const selectOption = (id_pregunta, id_answer) => {
    surveys.selectOption(id_pregunta, id_answer)
    setSurveys(surveys)
    console.log(surveys)
    console.log(id_pregunta, id_answer)
  }

  /* Devuelve un array o un valor null */
  const getSurveys = async () => {
    const url = 'http://127.0.0.1:8002/api/vista_pregunta_respuesta/'

    const response = await fetch(url)
      .then((datos) => datos.json())
      .then((datos) => {
        return datos
      })
      .catch((err) => {
        return null
      })
    if (response) {
      setSurveys(new model_surveys(response))
    } else {
      console.log('No se pudieron traer los datos de las encuestas...')
    }
  }

  useEffect(function () {
    getSurveys()
  }, [])
  useEffect(
    function () {
      if (surveys.arrSurvey) {
        surveys.markAllQuestionSelected()
        moveToStart()
      }
    },
    [nextOrPrev]
  )

  return (
    <>
      <section id="startSurvey" className="container">
        {!surveys.arrSurvey
          ? (
              'cargando'
            )
          : (
          <>
            <Survey
              survey={surveys.jsonSurvey[surveys.indiceActual]}
              selectOption={selectOption}
            />
            <div className="d-flex justify-content-between mx-4">
              <div id="backSurvey">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => handeButtonNavSurvey(false)}
                >
                  Anterior
                </button>
              </div>
              <div id="surveysPage" className="d-block p-2">
                <p>
                  {surveys.indiceActual + 1} de {surveys.IndiceMaximo + 1}
                </p>
              </div>
              {surveys.indiceActual < surveys.IndiceMaximo
                ? (
                <div id="nextSurvey">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={handeButtonNavSurvey}
                  >
                    Siguiente
                  </button>
                </div>
                  )
                : (
                <div id="SendSurvey">
                  <button
                    id="btnSendSurvey"
                    type="button"
                    className="btn btn-info text-white"
                    onClick={handleButtonSendSurvey}
                    disabled={isBtnSendDisabled}
                  >
                    Enviar
                  </button>
                </div>
                  )}
            </div>
          </>
            )}
      </section>
    </>
  )
}

export default Surveys
