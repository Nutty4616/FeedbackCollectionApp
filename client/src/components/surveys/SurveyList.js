import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          className="card border-secondary mb-3"
          style={{ width: "75rem", marginTop: "25px" }}
          key={survey.id}
        >
          <div className="card-body">
            <h5 className="card-title">{survey.title}</h5>
            <p className="card-text">{survey.body}</p>
            <p className="card-text" style={{ textAlign: "right" }}>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-footer bg-transparent border-secondary">
            <a href className="card-link" style={{ textDecoration: "none" }}>
              Yes: {survey.yes}
            </a>
            <a href className="card-link" style={{ textDecoration: "none" }}>
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="container">{this.renderSurveys()}</div>;
  }
}

function mapStateToprops({ surveys }) {
  return { surveys };
}

export default connect(mapStateToprops, { fetchSurveys })(SurveyList);
