const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/stripe", (res, req) => {
    console.log(req.body);
  });
};
