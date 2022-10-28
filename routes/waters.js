var router = require("express").Router();
var watersCtrl = require("../controllers/waters");
var drinkersCtrl = require("../controllers/drinkers");
const passport = require("passport");
const { route } = require(".");

// POST /
router.post("/drinkers/:id/waters", watersCtrl.create);

// GET /drinkers
router.get("/new", watersCtrl.newWater);
// router.get("/:id", drinkersCtrl.show);

// DELETE
router.delete("/waters/:id", watersCtrl.delWater);

// PUT
router.put("/:id", drinkersCtrl.updateLog);

module.exports = router;
