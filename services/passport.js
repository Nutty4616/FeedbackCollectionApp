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
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // A Query to check if a user exist in a Database
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // User does exist in database collection
        return done(null, existingUser);
      }
      // User does not exist in database collection
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
