var router = require("express").Router();
var watersCtrl = require("../controllers/waters");
var drinkersCtrl = require("../controllers/drinkers");
const passport = require("passport");
const { route } = require(".");

// POST /
router.post("/:id/log", watersCtrl.create);
// router.post("/show", drinkersCtrl.create);

// GET / water log
// router.get("/:id/log", watersCtrl.newWater);
router.get("/editlog", watersCtrl.newUpdate);
router.get("/:id/editlog", watersCtrl.updateLog);
router.get("/:id", drinkersCtrl.show);

// DELETE
router.delete("/waters/:id", watersCtrl.delWater);

// PUT
router.put("/log/:id", watersCtrl.updateLog);

module.exports = router;
