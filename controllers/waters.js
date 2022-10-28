const Drinker = require("../models/drinker");

//redirects to log.ejs to create a log a water entry
// function newWater(req, res) {
//   res.render("/drinkers/log", { user: req.user });
// }
//redirects to editlog.ejs to update a drinking entry
function newUpdate(req, res) {
  res.render("/drinkers/editlog", { user: req.user });
}

//creates a water entry and redirects back to show.ejs
function create(req, res) {
  console.log("test");
  Drinker.findById(req.params.id, function (err, drinker) {
    drinker.waters.push(req.body);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.render("drinkers/show");
      //   it takes us back to the show page
    });
  });
}

// function to delete log
function delWater(req, res, next) {
  Water.findOneAndDelete({ _id: req.params.waterID }, function (err, water) {
    if (err) return res.redirect("/show");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.render("/show");
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
  // newWater,
  newUpdate,
  delWater,
  updateLog,
};
