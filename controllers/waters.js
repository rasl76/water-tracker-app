const Drinker = require("../models/drinker");
const User = require("../models/user");

//redirects to log.ejs to create a log a water entry
function newWater(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    if (err) console.log(err);
    res.render("waters/log", {
      title: "Drinker",
      drinker,
      user: req.user,
    });
  });
}

// to go to the 'log' of this drinker
function show(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    if (err) console.log(err);
    console.log(drinker);
    res.render("waters/index", {
      title: "Drinker",
      drinker,
      water: drinker.waters,
      user: req.user,
    });
  });
}

// function to edit/update logged water entry
// and redirect back to show.ejs
function newUpdate(req, res) {
  Drinker.findByIdAndUpdate(req.params.id, function (err, water) {
    if (err) console.log(err);
    console.log(water);
    res.render("waters/editlog", {
      title: "Edit Your Entry",
      volume,
      text,
    });
  });
}

//creates a water entry and redirects back to show.ejs
function create(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    let water = { volume: req.body.volume, text: req.body.text };
    drinker.waters.push(water);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.redirect(`/waters/${req.params.id}`);
      //   it takes us back to the index page
    });
  });
}
// waters/show/${req.params.id}

// function to delete log
function delWater(req, res) {
  console.log("delWater", req.params.id, req.params.waterId);
  Drinker.findById(req.params.id, function (err, drinker) {
    console.log(drinker);
    drinker.waters.id(req.params.waterId).remove();
    drinker.save();
    res.redirect(`/waters/${req.params.id}`);
  });
}

//redirects to editlog.ejs to update a drinking entry
function updateLog(req, res) {
  Drinker.findByIdAndUpdate(req.params.id, req.body, function (err, water) {
    if (err) console.log(err);
    res.redirect("/waters/index");
  });
}

module.exports = {
  create,
  newWater,
  newUpdate,
  delWater,
  updateLog,
  show,
};
