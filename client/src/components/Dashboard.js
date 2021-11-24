import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="container">
      Dashboard
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/surveys/new" className="btn btn-primary">
          <MdAdd style={{ fontSize: "large" }} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
