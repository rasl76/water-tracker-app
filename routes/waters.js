const express = require("express");
const router = express.Router();
const watersCtrl = require("../controllers/waters");

router.post("/drinkers/:id/waters", watersCtrl.create);

module.exports = router;
