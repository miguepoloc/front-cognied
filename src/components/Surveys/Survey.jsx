import React from "react";
import PropTypes from "prop-types";
import Questions from "./Questions";
import estilo from "../../assets/css/Surveys.scss";
const Survey = () => {

  const survey = {
    name: "Estrés",
    desc: "para nosotros es importante saber que tan...class.",
    id_survey: 1,
    color: "#7052ff",
    questions: [
      {
        question: "Me siento más nervioso y ansioso que de costumbre.",
        id_question: 1,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
      {
        question: "Me da miedo sin razón alguna.",
        id_question: 2,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
      {
        question: "Me enojo fácilmente o siento pánico.",
        id_question: 3,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
      {
        question: "Siento que me estoy desmoronando.",
        id_question: 4,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
      {
        question: "Mis brazos y piernas tiemblan.",
        id_question: 5,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
      {
        question:
          "Me molestan los dolores de cabeza, cuello y dolor de espalda.",
        id_question: 6,
        answers: [
          { answer: "Siempre", id_answer: 4 },
          { answer: "Casi siempre", id_answer: 3 },
          { answer: "Algunas veces", id_answer: 2 },
          { answer: "Nunca", id_answer: 1 },
        ],
      },
    ],
  };

  return (
    <>
      <section className="container">
        <div className="callout mb-4" style={{ borderLeftColor: survey.color }}>
          <h5 style={{ color: survey.color }}>{survey.name}</h5>

          <p>{survey.desc}</p>
        </div>
        <Questions
          questions={survey.questions}
          name={survey.name}
          color={survey.color}
          key={survey.name+survey.id_survey}
        />
      </section>
    </>
  );
};

Survey.propTypes = {};

export default Survey;
