import React from "react";
import PropTypes from "prop-types";

const Answer = ({ name,answer, id_question,selectOption }) => {
  const handleClickAnswer = () => {
    selectOption(id_question, answer.id_answer);
  };
  return (
    <label>
      <input
        type="radio"
        className="option-input radio "
        name={name}
        value={answer.id_answer}
        onClick={handleClickAnswer}
      />
      {answer.answer}
    </label>
  );
};
/*
Answer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
};*/

export default Answer;
