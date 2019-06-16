const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.createCode = function createCode(body) {
  try {
    console.log(process.env.EXEC_API);
    return axios.post(process.env.EXEC_API + "/create", body);
  } catch (error) {
    console.error(error);
  }
};

exports.runCode = function createCode(uuid, body) {
  try {
    return axios.post(process.env.EXEC_API + "/run/" + uuid, body);
  } catch (error) {
    console.error(error);
  }
};
