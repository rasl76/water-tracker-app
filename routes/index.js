const express = require("express");
var router = express.Router();
const passport = require("passport");

// The root route renders our only view

router.get("/", function (req, res) {
  res.render("index", {
    user: req.user,
  });
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/drinkers",
    failureRedirect: "/",
  })
);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
module.exports = router;
