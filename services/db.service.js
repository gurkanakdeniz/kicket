const mongoose = require("mongoose");
const restApiModel = require("../models/rest.api.model");

exports.findUUID = async function(uuid) {
  return restApiModel.findOne({ url: uuid });
};

exports.insertModel = async function(endpoint, platform, requestIp) {
  const newApi = new restApiModel({
    _id: new mongoose.Types.ObjectId(),
    url: endpoint,
    platform: platform,
    creator: requestIp,
    created_date: new Date(),
    whitelist: ""
  });
  await newApi.save();
};
