var router = require("express").Router();
// new code below
const passport = require("passport");

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/drinkers");
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
    failureRedirect: "/drinkers",
  })
);
// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/drinkers");
});

module.exports = router;
