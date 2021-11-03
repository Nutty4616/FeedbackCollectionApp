const passport = require("passport");
const GoogleStrtegy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// A new GoogleStrategy instance is to authenticate users with Google.
// Inside a constructor we pass in Google config to tell google strategy to authenticate our users.
passport.use(
  new GoogleStrtegy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // A Query to check if a user exist in a Database
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // User does exist in database collection
          done(null, existingUser);
        } else {
          // User does not exist in database collection
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });

      new User({ googleId: profile.id }).save();
    }
  )
);
