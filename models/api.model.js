const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  url: { type: String },
  platform: { type: String },
  creator: { type: String },
  usage: { type: Number, default: 0 },
  usageIpHistory: { type: [String] },
  created_date: { type: Date, default: Date.now },
  whitelist: { type: String }
});

module.exports = mongoose.model("api", apiSchema);
