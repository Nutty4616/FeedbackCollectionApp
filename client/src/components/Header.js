import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { FaGoogle } from "react-icons/fa";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li className="nav-item">
            <a
              href="/auth/google"
              style={{ color: "white" }}
              className="nav-link btn btn-danger"
            >
              <FaGoogle style={{ marginBottom: "5px" }} />{" "}
              <b> Login with Google</b>
            </a>
          </li>
        );

      default:
        return [
          <li key="1" className="nav-item">
            <Payments />
          </li>,
          <li key="3" className="nav-item">
            <a href style={{ color: "#000" }} className="nav-link">
              Credits: {this.props.auth.credits}
            </a>
          </li>,
          <li key="2" className="nav-item">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="navbar-brand"
          >
            FeedBack App
          </Link>
          <ul className="nav justify-content-end">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

/* 
  
*/

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
