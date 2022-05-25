import React, { useEffect, useState, useRef } from 'react'
import { Surveys as model_surveys } from '../../helpers/model_survey/Surveys'
import '../../assets/css/Surveys.scss'
import Survey from './Survey'
import ganso_pensando from "../../assets/img/ganso/ganso_pensando.png"
import Scroll from '../../helpers/helperScroll'
import {ErrorAlert,SendAlert, SendOkAlert, SendBadAlert } from "../../helpers/helper_Swal_Alerts"
import {GET_vista_pregunta_respuesta as getSurveys,POST_usuario_encuesta as SendSurveys} from '../../helpers/helperApi'
import { RotatingLines } from 'react-loader-spinner'

const errorFaltaPorResponder = ()=>{
  ErrorAlert("Ups...","Parece que alguna pregunta de esta encuesta ha quedado sin responder. por favor, asegurate de que <b> todas </b> las preguntas tengan respuesta")
}

const Surveys = () => {

  const [surveys, setSurveys] = useState(new model_surveys(null, false))
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [nextOrPrev, setNextOrPrev] = useState(false) // lo uso para cargar las preguntas si da back.
  const [isBtnSendDisabled, setIsBtnSendDisabled] = useState(false)

  useEffect(async () =>{
    const response = await getSurveys();
    console.log(response);
    if(response){
      try{
        await setSurveys(new model_surveys(response))
        setLoading(false);
      }catch(e){
        setLoading(false);
        setError(true);
      }
    }
    else{
      setLoading(false);
      setError(true);
    }
  }, [])

  useEffect(
    function () {
      if (surveys.arrSurvey) {
        surveys.markAllQuestionSelected()
        surveys.results();
        moveToStart()
      }
    },
    [nextOrPrev]
  )

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
    surveys.selectAllOptionRandom();
    /* fin bloque de prueba */

    if (!surveys.isAllQuestionsSelected() && isNext) {
      errorFaltaPorResponder()
    }

    const newObjSurveys = isNext ? surveys.nextSurvey() : surveys.prevSurvey()
    if (newObjSurveys) {
      setSurveys(newObjSurveys)
      setNextOrPrev(!nextOrPrev)
    }
  }


  const buildDataToSend = (userId)=>{
    const sizeDataSurveys = surveys.getLengthJsonSurvey();
    const dataSurveys = surveys.generateJsonToSend(userId);
    let arrDataToSend = []
    for(let i = 0; i < sizeDataSurveys; i++){
      arrDataToSend.push(createDataToSend(dataSurveys,userId,i))
    }
    return arrDataToSend;
    
  }

   /**
     * 
     * @param {Array<JSON>} answers 
     * @param {Number} userId 
     * @param {Number} index 
     * @returns JSON
     */
    const createDataToSend = (answers,userId,index)=>{
      let key = Object.keys(answers)[index];

      let row = {
          "id_usuario": ""+userId,
          "id_encuesta": key,
          "respuestas": answers[key]
      }
      return row;
  }

  const handleButtonSendSurvey = async () => {
    const userId = Math.floor(Math.random() * (29 - 4) + 4);
    
    /* Antes de hacer la peticion, rectifica que todas las preguntas
        de las encuestas tengan respuesta.
      */
    if (surveys.isAllSurveysAnswered()) {
      setIsBtnSendDisabled(() => true)
      SendAlert(undefined,'Tus respuestas estan siendo enviadas y procesadas <b>Espera un momento</b>')
      // Debería esperar una respuesta de todo ok., si la respuesta es negativa el boton vuelve a quedar
      const send = await SendSurveys(buildDataToSend(userId));
      if(send){
        //Deberia Redireccionar a un lugar....
        SendOkAlert(undefined,"¡Enhorabuena! tus respuestas han sido procesadas <b>serás redireccionado en breve.</b>");
      }else{
        console.log(send)
          SendBadAlert();
      }
    } else {
      errorFaltaPorResponder();
    }
  }

  const selectOption = (id_pregunta, id_answer) => {
    surveys.selectOption(id_pregunta, id_answer)
    setSurveys(surveys)
  }

  

  return (
    <>
      <section id="startSurvey" className="container">
        {
          loading?(<div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">

          <RotatingLines
          width="100"
          strokeColor="#6495ED"
          strokeWidth="3"
          animationDuration=".8"
        />
        </div>):(<>
         { error?(
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img src={ganso_pensando} width="307" height="307"></img>
              <h5 className='my-4 text-center'>Uhm... Parece que ha ocurrido un error al obtener las pruebas diagnósticas.</h5>
            </div>
          </div>
        ): (<>
        {surveys.arrSurvey? (
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
            
            )
          : (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <img src={ganso_pensando} width="307" height="307"></img>
              <h5 className='my-4 text-center'>Uhm... Parece que no tengo pruebas diagnósticas.</h5>
            </div>
          </div>
            )}
        
        </>)}
        </>)
        }
        
      </section>
    </>
  )
}

export default Surveys
