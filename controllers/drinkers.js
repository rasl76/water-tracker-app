const Drinker = require("../models/drinker");
const drinker = require("../models/drinker");

module.exports = {
  index,
  addWater,
  delWater,
};

function index(req, res, next) {
  console.log(req.drinker);
  // Make the query object to use with Drinker.find based up
  // the user has submitted the search form or now
  // Default to sorting by name

  // Passing search values, name & sortKey, for use in the EJS
  res.render("drinkers/index", {
    drinker: req.drink,
  });
}

function addWater(req, res, next) {
  req.drinker.waters.push(req.body);
  req.drinker.save(function (err) {
    res.redirect("/drinkers");
  });
}

function delWater(req, res, next) {}
