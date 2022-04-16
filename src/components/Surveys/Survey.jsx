import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Questions from "./Questions";


const Survey = ({ survey, selectOption}) => {
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
