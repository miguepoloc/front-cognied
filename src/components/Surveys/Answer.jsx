import React from "react";
import PropTypes from "prop-types";

const Answer = ({ name, value, text }) => {
  return (
    <label>
      <input
        type="radio"
        className="option-input radio "
        name={name}
        value={value}
      />
      {text}
    </label>
  );
};

Answer.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
};

export default Answer;
