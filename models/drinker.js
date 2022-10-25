var mongoose = require("mongoose");

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var waterSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);

var drinkerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    waters: [waterSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drinker", drinkerSchema);
