const Drinker = require("../models/drinker");

function create(req, res) {
  Drinker.findById(req.params.id, function (err, drinker) {
    // drinker as argument is an object.
    if (err) return res.render(err.message);
    drinker.waters.push(req.body);
    // pushes the request body, pushes it to the object of 'drinker'
    drinker.save(function (err) {
      res.redirect(`/drinkers/${drinker._id}`);
      //   it takes us back to the show page
    });
  });
}

module.exports = {
  create,
};
