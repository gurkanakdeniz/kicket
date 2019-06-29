const mongoose = require("mongoose");
const apiModel = require("../models/api.model");

exports.findUUID = async function(uuid) {
  return apiModel.findOne({ url: uuid });
};

exports.insertModel = async function(endpoint, platform, requestIp) {
  const model = new apiModel({
    _id: new mongoose.Types.ObjectId(),
    url: endpoint,
    platform: platform,
    creator: requestIp,
    created_date: new Date(),
    whitelist: ""
  });
  await model.save();
};

exports.updateModel = async function(model, ip) {
  model.usage = model.usage + 1;
  model.usageIpHistory.push(ip + " : " + new Date());
  await model.save();
};
