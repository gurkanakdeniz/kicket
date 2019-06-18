const axios = require("axios");
const mongoose = require("mongoose");
const requestIp = require("request-ip");
const dotenv = require("dotenv");
dotenv.config();

exports.createCode = function createCode(body) {
  try {
    const insertApi = new urlModel({
      _id: new mongoose.Types.ObjectId(),
      url: "",
      creator: requestIp.getClientIp(req).toString(),
      created_date: new Date(),
      whitelist: ""
    });
    console.log(process.env.EXEC_API);
    return axios.post(process.env.EXEC_API + "/create", body);
  } catch (error) {
    console.error(error);
  }
};

exports.runCode = function createCode(uuid, body) {
  try {
    // get uuid app name
    return axios.post(process.env.EXEC_API + "/run/" + uuid, body);
  } catch (error) {
    console.error(error);
  }
};
