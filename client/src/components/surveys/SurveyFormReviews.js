import React from "react";
import { connect } from "react-redux";

const SurveyFormReview = ({ onCancel, formValues }) => {
  return (
    <div className="container">
      <h5>Please confirm your entries</h5>

      <button className="btn btn-warning" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

{
  /* <div className="col">
        <div>
          <label className="form-label fw-light">Survey Title</label>
          <div>{formValues.title}</div>
        </div>
      </div> */
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
