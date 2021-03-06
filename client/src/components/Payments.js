import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import { MdPayment } from "react-icons/md";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedback App"
        description="R5 for 5 email credits"
        amount={500}
        currency="ZAR"
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="nav-link btn-primary" style={{ color: "white" }}>
          <MdPayment /> Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
