// require model will always be define capital letter
// and singular
// one dot in require("../models/drinker") would only give
// me access to other controller js files
const Drinker = require("../models/drinker");
const user = require("../models/user");

module.exports = {
  create,
  index,
  newDrinker,
  show,
  delDrinker,
};
//displays all drinkers
function index(req, res) {
  Drinker.find({}, function (err, drinkers) {
    res.render("drinkers/index", {
      title: "All Drinkers",
      drinkers,
      user: req.user,
    });

    // res.render("drinkers/index", { drinker: req.water,});
  });
}
//redirects to new.ejs to create a new drinker form
function newDrinker(req, res) {
  Drinker.find({}, function (err, drinkers) {
    res.render("drinkers/new", {
      title: "Add Drinker",
      drinkers,
      user: req.user,
    });
  });
}
//creates a new drinker and redirects back to drinkers index
function create(req, res) {
  const drinker = new Drinker(req.body);
    Drinker.find({}, function (err, drinkers) { 
    user.drinkers.push

      user: req.user,
    });
  drinker.save(function (err) {
    if (err) return res.redirect("/drinkers/new");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.redirect("/drinkers");
  });
}
// function to edit/update/
// function to delete drinker information

function delDrinker(req, res) {
  console.log(req.user);
  Drinker.findByIdAndRemove(req.user._id, function (err, drinker) {
    console.log(drinker);
    if (err) console.log(err);
    return res.redirect("/drinkers");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.redirect("/drinkers");
  });
}

// to go to the 'log' of this drinker
function show(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    if (err) console.log(err);
    res.render("drinkers/show", { title: "Drinker", drinker, user: req.user });
  });
}
