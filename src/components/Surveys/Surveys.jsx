import React, { useEffect, useState,useRef } from "react"
import { Surveys as model_surveys } from "../../assets/js/model_survey/Surveys";
import "../../assets/css/Surveys.scss";
import Survey from "./Survey";
const Surveys = () => {
  console.count("me he actualizado")
    const [surveys, setSurveys] = useState(new model_surveys(null, false));
    const [nextOrPrev, setNextOrPrev] = useState(false); //lo uso para cargar las preguntas si da back.

    const handeNextIndexButton = async (e) => {
      setSurveys(surveys.nextSurvey());
      setNextOrPrev(!nextOrPrev);
    };

     const handePrevIndexButton = async () => {
       let temp = surveys
       setSurveys(surveys.prevSurvey());
        setNextOrPrev(!nextOrPrev); //Lo niego para que cambie el estado si o si. debo validar que 
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
        if (surveys.arrSurvey) surveys.markAllQuestionSelected();
      },
      [nextOrPrev]
    );


  return (
    <>
      <section className="container">
        {!surveys.arrSurvey ? (
          "cargando"
        ) : (
          <>
            <Survey
              survey={surveys.jsonSurvey[surveys.indiceActual]}
              selectOption={selectOption}
            />
            <div id="backSurvey">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handePrevIndexButton}
              >
                back {surveys.indiceActual}
              </button>
            </div>
            <div id="nextSurvey">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handeNextIndexButton}
              >
                next
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Surveys