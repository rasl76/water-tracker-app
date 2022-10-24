const drinker = require("../models/drinker");
const Drinker = require("../models/drinker");

function create(req, res) {
  Drinker.findById(req.params.id, function (err, movie) {
    // movie as argument is an object.
    if (err) return res.render(err.message);
    drinker.reviews.push(req.body);
    // pushes the request body, pushes it to the object of 'movie'
    drinker.save(function (err) {
      res.redirect(`/movies/${drinker._id}`);
      //   it takes us back to the show page
    });
  });
}

module.exports = {
  create,
};
