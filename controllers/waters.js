const Drinker = require("../models/drinker");

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

//redirects to editlog.ejs to update a drinking entry
function newUpdate(req, res) {
  res.render("editlog", { user: req.user });
}

//creates a water entry and redirects back to show.ejs
function create(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    let water = { volume: req.body.volume, text: req.body.text };
    drinker.waters.push(water);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      // res.redirect("/waters/show");
      console.log("water");
      res.redirect(`/waters/${req.params.id}`);
      //   it takes us back to the show page
    });
  });
}
// waters/show/${req.params.id}

// function to delete log
function delWater(req, res) {
  Water.findOneAndDelete({ _id: req.params.waterID }, function (err, water) {
    if (err) return res.redirect("/");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.render("show");
  });
}

// function to edit/update logged water entry
// and redirect back to show.ejs
function updateLog(req, res) {
  Water.findByIdAndUpdate(req.params.id, req.body, function (err, water) {
    if (err) console.log(err);
    res.redirect("/drinkers/log");
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
