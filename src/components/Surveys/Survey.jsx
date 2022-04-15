import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Questions from "./Questions";


const Survey = ({ survey, selectOption}) => {
  console.log(survey);
  /*
    fetch("http://127.0.0.1:8002/api/vista_pregunta_respuesta/")
      .then((datos) => datos.json())
      .then((datos) => {
        let surveys = new Surveys(datos);
        surveys.buildSurveys()
      })
      .catch((err) =>
        console.log(
          "error al traer las preguntas y respuestas de ela encuesta."
        )
      );
 */

  return (
    <>
      <div className="callout mb-4" style={{ borderLeftColor: survey.color }}>
        <h5 style={{ color: survey.color }}>{survey.name}</h5>

        <p>{survey.desc}</p>
      </div>
      <Questions
        questions={survey.questions}
        name={survey.name}
        color={survey.color}
        key={survey.name + survey.id_survey}
        selectOption={selectOption}
      />
    </>
  );
};

Survey.propTypes = {
};

export default Survey;
