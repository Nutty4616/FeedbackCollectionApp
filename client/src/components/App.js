import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => (
  <div className="container">
    <h2>Dashboard</h2>
  </div>
);
const SurveyNew = () => (
  <div className="container">
    <h2>SurveyNew</h2>
  </div>
);
const Landing = () => (
  <div className="container">
    <h2>Landing</h2>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
