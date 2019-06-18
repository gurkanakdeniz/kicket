const mongoose = require("mongoose");

const restApiSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: { type: String },
  creator: { type: String },
  usage: { type: Number, default: 0 },
  created_date: { type: Date, default: Date.now },
  whitelist: { type: String }
});

module.exports = mongoose.model("restApi", restApiSchema);
