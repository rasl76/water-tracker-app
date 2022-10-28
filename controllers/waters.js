const Drinker = require("../models/drinker");

//redirects to show.ejs to create a new drinker form
function newWater(req, res) {
  res.render("/drinkers/show", { user: req.user });
}
//creates a new waterlog and redirects back to drinkers index
function create(req, res) {
  Drinker.findById(req.params.id, function (err, water) {
    drinker.waters.push(req.body);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.render("/drinkers/show");
      //   it takes us back to the show page
    });
  });
}


function delWater(req, res, next) {
  Water.findOneAndDelete({ _id: req.params.waterID }, function (err, water) {
    if (err) return res.redirect("/show");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.redirect("/show");
  });
}
function updateLog(req, res) {
  Water.findByIdAndUpdate(req.params.id, req.body, function (err, water) {
    if (err) console.log(err);
    res.redirect("/drinkers");
  });
}


module.exports = {
  create,
  newWater,
  delWater,
  updateLog,
};
