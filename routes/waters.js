var router = require("express").Router();
var watersCtrl = require("../controllers/waters");
const passport = require("passport");
const { route } = require(".");

// POST /
router.post("/:id", watersCtrl.create);

// GET / water log
router.get("/:id/log", watersCtrl.newWater);
router.get("/editlog", watersCtrl.newUpdate);
router.get("/:id/editlog", watersCtrl.updateLog);
router.get("/:id", watersCtrl.show);

// DELETE
router.delete("/:id", watersCtrl.delWater);

// PUT
router.put("/log/:id", watersCtrl.updateLog);

module.exports = router;
