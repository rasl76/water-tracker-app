const Water = require("../models/drinker");

function create(req, res) {
  Water.findById(req.params.id, function (err, water) {
    if (err) return res.render(err.message);
    drinker.waters.push(req.body);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.render("/drinkers/show");
      //   it takes us back to the show page
    });
  });
}
function newWater(req, res) {
  res.render("waters/new", { user: req.user });
}
// function addWater(req, res, next) {
//   req.drinker.waters.push(req.body);
//   req.drinker.save(function (err) {
//     res.redirect("/drinkers/show");
//   });
// }


function delWater(req, res, next) {
  waters.findOneAndRemove({ _id: req.params.waterID }, function (err, water) {
    if (err) return res.redirect("/show");
    // res.redirect(`/drinkers/${drinker._id}`);
    res.redirect("/show");
  });
}

module.exports = {
  create,
  newWater,
  // addWater,
  delWater,
};
