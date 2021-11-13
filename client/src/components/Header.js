import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
              Login With Google
            </a>
          </li>
        );

      default:
        return (
          <li className="nav-item">
            <a href="/api/logout" className="nav-link">
              Logout
            </a>
          </li>
        );
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
