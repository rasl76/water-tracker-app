var router = require("express").Router();
var watersCtrl = require("../controllers/waters");
var drinkersCtrl = require("../controllers/drinkers");
const passport = require("passport");
const { route } = require(".");

// POST /
router.post("/:id/waters", watersCtrl.create);
router.post("/drinkers/show", watersCtrl.create);

// GET / water log
router.get("/log", watersCtrl.newWater);
router.get("/editlog", watersCtrl.newUpdate);
// router.get("/:id", drinkersCtrl.show);

// DELETE
router.delete("/waters/:id", watersCtrl.delWater);

// PUT
router.put("/log/:id", watersCtrl.updateLog);

module.exports = router;
