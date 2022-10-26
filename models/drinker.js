const { ObjectId } = require("mongoose");
var mongoose = require("mongoose");

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var waterSchema = new mongoose.Schema(
  {
    text: String,
    volume: Number,
    Date: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

var drinkerSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    human: Boolean,
    waters: [waterSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drinker", drinkerSchema);
