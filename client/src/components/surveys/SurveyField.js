import React from "react";

const SurveyField = ({ input, label }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input className="form-control" {...input} />
    </div>
  );
};

export default SurveyField;
