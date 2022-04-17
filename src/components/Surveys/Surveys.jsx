import React, { useEffect, useState,useRef } from "react"
import { Surveys as model_surveys } from "../../assets/js/model_survey/Surveys";
import  "../../assets/css/Surveys.scss";
import Survey from "./Survey";
import Scroll from "../../helpers/helperScroll"

const Surveys = () => {
    const [surveys, setSurveys] = useState(new model_surveys(null, false));
    const [nextOrPrev, setNextOrPrev] = useState(false); //lo uso para cargar las preguntas si da back.

    const moveToStart = ()=>{
      Scroll.scroll("startSurvey",true);
    }
    /**
     * La funcion se encarga de lanzar la siguiente o anterior encuesta
     * si cumple con los criterios establecidos.
     * @param {boolean} isNext 
     */
    const handeButtonNavSurvey = async (isNext = true) => {
      let newObjSurveys = isNext ? surveys.nextSurvey() : surveys.prevSurvey();
      if (newObjSurveys) {
        setSurveys(newObjSurveys);
        setNextOrPrev(!nextOrPrev);
      }
    };

     const selectOption = (id_pregunta, id_answer) => {
       surveys.selectOption(id_pregunta, id_answer);
       setSurveys(surveys)
     };

    /*Devuelve un array o un valor null*/
    const getSurveys = async () => {
      const url = "http://127.0.0.1:8002/api/vista_pregunta_respuesta/";

      const response = await fetch(url)
        .then((datos) => datos.json())
        .then((datos) => {
          return datos;
        })
        .catch((err) => {
          return null;
        });
      if(response)  {
        setSurveys(new model_surveys(response));
      }else{
          console.log("No se pudieron traer los datos de las encuestas...")
      }
     console.log(surveys)
    };

    useEffect(function() {
      getSurveys();
    }, []);
    useEffect(
      function () {
        if (surveys.arrSurvey) {
          surveys.markAllQuestionSelected();
          moveToStart();
        }
      },
      [nextOrPrev]
    );


  return (
    <>
      <section id="startSurvey" className="container">
        {!surveys.arrSurvey ? (
          "cargando"
        ) : (
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
                  onClick={()=>handeButtonNavSurvey(false)}
                >
                  Anterior
                </button>
              </div>

              <div id="surveysPage" className="d-block p-2">
                <p>
                  {surveys.indiceActual +1} de {surveys.IndiceMaximo +1}
                </p>
              </div>

              <div id="nextSurvey">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handeButtonNavSurvey}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Surveys