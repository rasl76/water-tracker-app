var mongoose = require("mongoose");
const Schema = mongoose.Schema;

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var waterSchema = new Schema(
  {
    volume: Number,
    text: String,
    // drinkers: [drinkerSchema],
  },
  {
    timestamps: true,
  }
);

var drinkerSchema = new Schema(
  {
    name: String,
    age: Number,
    human: Boolean,
    waters: [waterSchema],
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Drinker", drinkerSchema);
