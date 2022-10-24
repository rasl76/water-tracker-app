var router = require("express").Router();
var drinkersCtrl = require("../controllers/drinkers");

// GET /drinkers
router.get("/drinkers", drinkersCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /drinkers/:id/facts
router.post("/facts", drinkersCtrl.addFact);

// DELETE /facts/:id
router.delete("/facts/:id", drinkersCtrl.delFact);

module.exports = router;
