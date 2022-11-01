var router = require("express").Router();
// new code below
const passport = require("passport");
const indexCtrl = require("../controllers/index");

// The root route renders our only view
router.get("/", indexCtrl.index);

// Google OAuth login route
router.get(
  console.log("authtest"),
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
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
