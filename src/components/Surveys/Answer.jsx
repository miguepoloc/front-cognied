import React from "react";
import PropTypes from "prop-types";

const Answer = ({ _name,_text_answer, _id ,_value ,handleClickAnswer }) => {

  return (
    <label>
      <input
        type="radio"
        className="option-input radio "
        name={_name}
        // value={_value}
        onClick={handleClickAnswer}
        id={_id}
      />
      {_text_answer}
    </label>
  );
};

Answer.propTypes = {
  _name:  PropTypes.string,
  _id: PropTypes.string,
  _value: PropTypes.number,
  _text_answer: PropTypes.string,
  handleClickAnswer: PropTypes.func,
};

export default Answer;
