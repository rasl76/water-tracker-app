const Drinker = require("../models/drinker");

function create(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    if (err) return res.render(err.message);
    drinker.waters.push(req.body);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.redirect(`/drinkers/${drinker._id}`);
      //   it takes us back to the show page
    });
  });
}
function newWater(req, res) {
  res.render("waters/new", { user: req.user });
}

module.exports = {
  create,
  newWater,
};
