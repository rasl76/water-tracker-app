var router = require("express").Router();
var drinkersCtrl = require("../controllers/drinkers");
const passport = require("passport");
const { route } = require(".");

// GET /drinkers
router.get("/", drinkersCtrl.index);
router.get("/new", drinkersCtrl.newDrinker);

// POST /
router.post("/waters", isLoggedIn, drinkersCtrl.addWater);

// router.get("/drinkers", drinkersCtrl.index);

router.delete("/waters/:id", drinkersCtrl.delWater);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// OAuth logout route

module.exports = router;
