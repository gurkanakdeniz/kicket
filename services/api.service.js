const axios = require("axios");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const restApiModel = require("../models/rest.api.model");

exports.createCode = async function createCode(body, requestIp) {
  try {
    let response = await axios.post(process.env.NODE_API, body, {
      headers: { "Content-Type": "text/plain" }
    });
    if (response.data.endpoint !== null) {
      const newApi = new restApiModel({
        _id: new mongoose.Types.ObjectId(),
        url: response.data.endpoint,
        platform: response.data.platform,
        creator: requestIp,
        created_date: new Date(),
        whitelist: ""
      });
      await newApi.save();
    }
    return response;
  } catch (error) {
    console.error(error);
  }
};

exports.runCode = async function createCode(uuid, body) {
  try {
    const result = await restApiModel.findOne({ url: uuid });
    if (result.platform === "node") {
      return axios.post(process.env.NODE_API + "/rest/" + uuid, body, {
        headers: { "Content-Type": "application/json" }
      });
    }
    return axios.post(process.env.EXEC_API + "/run/" + uuid, body);
  } catch (error) {
    console.error(error);
  }
};
