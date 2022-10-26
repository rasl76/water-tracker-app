const Drinker = require("../models/drinker");

module.exports = {
  create,
  index,
  newDrinker,
  show,
  addWater,
  delWater,
};
//displays all drinkers
function index(req, res) {
  console.log(req.drinker);
  Drinker.find({}, function (err, drinkers) {
    res.render("drinkers/index", { title: "All Drinkers", drinkers });
    // res.render("drinkers/index", { drinker: req.water,});
  });
}
//redirects to new.ejs to create a new drinker form
function newDrinker(req, res) {
  res.render("drinkers/new", { title: "Add Drinker" });
}
//creates a new drinker and redirects back to drinkers index
function create(req, res) {
  const drinker = new Drinker(req.body);
  drinker.save(function (err) {
    if (err) return res.redirect("/drinkers/new");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.redirect("/drinkers/index");
  });
}
// function to edit/update drink information



// to go to the 'log' of this drinker
function show(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    res.render("drinkers/show", { title: "Drinker", drinker });
  });
}
function addWater(req, res, next) {
  req.drinker.waters.push(req.body);
  req.drinker.save(function (err) {
    res.redirect("/drinkers/show");
  });
}
function delWater(req, res, next) {}
