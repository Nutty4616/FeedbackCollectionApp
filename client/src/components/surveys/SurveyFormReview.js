import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { MdOutlineEmail } from "react-icons/md";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="form-label fw-light">{label}</label>
        <div style={{ marginBottom: "20px" }}>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="container" style={{ marginTop: "20px" }}>
        <h5>Please confirm your entries</h5>
        {reviewFields}
        <button
          className="btn btn-warning col"
          onClick={onCancel}
          style={{ marginTop: "10px", marginRight: "70%" }}
        >
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="btn btn-success col"
          style={{ marginTop: "10px" }}
        >
          Send Survey
          <MdOutlineEmail style={{ marginLeft: "5px" }} />
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
