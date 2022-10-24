const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const Drinker = require("../models/drinker");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in with OAuth...

      passport.use(
        new GoogleStrategy(
          {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK,
          },
          function (accessToken, refreshToken, profile, cb) {
            Drinker.findOne({ googleId: profile.id }, function (err, drinker) {
              if (err) return cb(err);
              if (drinker) {
                return cb(null, drinker);
              } else {
                // we have a new student via OAuth!
                var newDrinker = new Drinker({
                  name: profile.displayName,
                  email: profile.emails[0].value,
                  googleId: profile.id,
                });
                newDrinker.save(function (err) {
                  if (err) return cb(err);
                  return cb(null, newDrinker);
                });
              }
            });
          }
        )
      );
    }
  )
);
passport.serializeUser(function (drinker, done) {
  done(null, drinker.id);
});

passport.deserializeUser(function (id, done) {
  Drinker.findById(id, function (err, drinker) {
    done(err, drinker);
  });
});
