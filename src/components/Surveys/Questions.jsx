import React from "react";
import PropTypes from "prop-types";
import Question from "./Question";


const Questions = ({ questions, name, color }) => {
  return (
    <div className="mx-4 my-4 ">
      <div className="row">
        {questions.map((question, index) => {
          return (
            <Question
              name={name}
              question={question}
              index={index}
              color={color}
              key={question.id_question}
            />
          );
        })}
      </div>
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.array,
};

export default Questions;
