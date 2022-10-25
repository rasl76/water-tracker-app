const express = require("express");
const router = express.Router();
const passport = require("passport");
var drinkersCtrl = require("../controllers/drinkers");

// GET /drinkers
router.get("/", drinkersCtrl.index);

// router.get("/", indexCtrl.index);
// router.get("/new", drinkersCtrl.new);
// router.get("/:id", drinkersCtrl.show);
// router.post("/", drinkersCtrl.create);
// router.post("/:id/addWater", flightsCtrl.addDestination);

// POST /waters
// We will already have access to the logged in student on
// the server, therefore do not use: /drinkers/:id/facts
router.post("/waters", isLoggedIn, drinkersCtrl.addWater);
// DELETE / waters/:i
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
