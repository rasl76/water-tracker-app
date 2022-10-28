var router = require("express").Router();
var drinkersCtrl = require("../controllers/drinkers");
const passport = require("passport");
const { route } = require(".");
const watersCtrl = require("../controllers/waters");

// POST /
router.post("/show", isLoggedIn, watersCtrl.create);
router.post("/", drinkersCtrl.create);

// GET /drinkers
router.get("/", drinkersCtrl.index);
router.get("/new", drinkersCtrl.newDrinker);
router.get("/:id", drinkersCtrl.show);
router.get("/:id/edit", drinkersCtrl.editDrinker);

// DELETE
router.delete("/waters/:id", watersCtrl.delWater);
router.delete("/:id", drinkersCtrl.delDrinker);

// PUT
router.put("/:id", drinkersCtrl.updateDrinker);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// OAuth logout route
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
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
