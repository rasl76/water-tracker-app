var router = require("express").Router();
var watersCtrl = require("../controllers/waters");

router.get("/new", watersCtrl.newWater);
router.post("/drinkers/:id/waters", watersCtrl.create);

module.exports = router;
