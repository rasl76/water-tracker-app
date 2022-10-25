var router = require("express").Router();
var watersCtrl = require("../controllers/waters");

router.post("/drinkers/:id/waters", watersCtrl.create);

module.exports = router;
