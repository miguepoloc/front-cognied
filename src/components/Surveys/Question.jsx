import React from "react";
import PropTypes from "prop-types";
import Answer from "./Answer";

const Question = ({
  question,
  name,
  index,
  color,
  selectOption,
}) => {
  return (
    <div className="mb-4  col-12  col-lg-6">
      <div
        className="card-header  d-flex align-items-center"
        style={{ backgroundColor: color }}
      >
        <h5 className="my-0 font-weight-normal text-white  ">
          {question.question}
        </h5>
      </div>
      <div className="border shadow w-100 card-body float-left pt-0">
        <div className="float-left d-flex flex-column">
          {question.answer.map((answer, i) => {
            return (
              <Answer
                name={`${name}_${index}`}
                answer = {answer}
                id_question = {question.id_question}
                key={`${answer.id_answer}`}
                selectOption={selectOption}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  name: PropTypes.string,
  question: PropTypes.object,
};

export default Question;
