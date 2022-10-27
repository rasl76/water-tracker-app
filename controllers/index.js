// controllers only think to look for views which is why it
//  doesn't need / before "index.ejs"

function index(req, res) {
  res.render("index.ejs", { user: req.user });
}
module.exports = { index };
