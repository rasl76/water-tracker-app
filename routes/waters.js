var router = require("express").Router();
var watersCtrl = require("../controllers/waters");
const passport = require("passport");
const { route } = require(".");

router.post("/drinkers/:id/waters", watersCtrl.create);
router.get("/new", watersCtrl.newWater);

// router.delete("/waters/:id", drinkersCtrl.delWater);

module.exports = router;
