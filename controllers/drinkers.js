// require model will always be define capital letter
// and singular
// one dot in require("../models/drinker") would only give
// me access to other controller js files
const Drinker = require("../models/drinker");
const User = require("../models/user");

module.exports = {
  create,
  index,
  newDrinker,
  show,
  delDrinker,
  updateDrinker,
  editDrinker,
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
async function create(req, res) {
  console.log("in create");
  req.body.user = req.user._id;
  const drinker = await Drinker.create(req.body);
  res.redirect("/drinkers");
  // const drinker = new Drinker(req.body);
  // Drinker.findById(req.params.id, function (err, drinker) {
  //   user.drinker.push(req.body.drinkerId);
  //   drinker.save(function (err) {
  //     if (err) return res.redirect("/drinkers/new");
  //     res.redirect("/drinkers");
  //   });
  // });
}
// function to edit/update/

function editDrinker(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    if (err) console.log(err);
    res.render("drinkers/edit", { title: "Drinker", drinker, user: req.user });
  });
}

// function to delete drinker information

function delDrinker(req, res) {
  console.log(req.user);
  Drinker.findOneAndDelete({ user: req.user._id }, function (err, drinker) {
    console.log(drinker);
    if (err) console.log(err);
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
// function to edit/update drinker information
function updateDrinker(req, res) {
  Drinker.findByIdAndUpdate(req.params.id, req.body, function (err, drinker) {
    if (err) console.log(err);
    res.redirect("/drinkers");
  });
}
