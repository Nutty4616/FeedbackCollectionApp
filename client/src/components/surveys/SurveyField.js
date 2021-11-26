import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="form-label fw-light">{label}</label>
      <input
        className="form-control"
        style={{ marginBottom: "5px" }}
        {...input}
      />
      <div style={{ marginBottom: "20px", color: "red" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
