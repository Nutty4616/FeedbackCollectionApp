import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { IoMdDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValue: "You must provide a Survey Title",
  },
  {
    label: "Subject Line",
    name: "subject",
    noValue: "You must provide a Subject Line",
  },
  {
    label: "Email Body",
    name: "body",
    noValue: "You must provide an Email Body",
  },
  {
    label: "Recipient List",
    name: "emails",
    noValue: "You must provide Recipient List",
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <form
          className="row"
          style={{ marginTop: "20px" }}
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link
            to="/surveys"
            style={{ marginTop: "20px", marginRight: "70%" }}
            className="btn btn-secondary col"
          >
            Cancel
          </Link>

          <button
            className="btn btn-primary col"
            style={{ marginTop: "20px" }}
            type="submit"
          >
            Next
            <IoMdDoneAll style={{ marginLeft: "10px" }} />
          </button>
        </form>
      </div>
    );
  }
}

// Validation Logic
function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || "");

  _.each(FIELDS, ({ name, noValue }) => {
    if (!values[name]) {
      errors[name] = noValue;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
