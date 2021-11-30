import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link
          to="/surveys/new"
          className="btn btn-primary"
          style={{
            position: "fixed",
            width: "60px",
            height: "60px",
            bottom: "60px",
            right: "40px",
            color: "white",
            borderRadius: "50px",
            textAlign: "center",
            boxShadow: "2px 2px 3px #999",
          }}
        >
          <MdAdd style={{ fontSize: "large", marginTop: "14px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
