var router = require("express").Router();
var drinkersCtrl = require("../controllers/drinkers");

// GET /drinkers
router.get("/drinkers", drinkersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /drinkers/:id/facts
router.post("/waters", isLoggedIn, drinkersCtrl.addWater);

// DELETE /facts/:id
var router = require("express").Router();
// new code below
const passport = require("passport");

router.get("/drinkers", drinkersCtrl.index);

router.delete("/waters/:id", drinkersCtrl.delWater);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
