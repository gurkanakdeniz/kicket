const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./db.service");

exports.createCode = async function createCode(body, requestIp) {
  try {
    let response = null;
    // console.log(JSON.stringify(body));
    // console.log(body.platform);
    if (body.platform === "java") {
      response = await axios.post(process.env.JAVA_API, body.code, {
        headers: { "Content-Type": "text/plain" }
      });
    } else if (body.platform === "node") {
      response = await axios.post(process.env.NODE_API, body.code, {
        headers: { "Content-Type": "text/plain" }
      });
    } else if (body.platform === "python") {
      response = await axios.post(process.env.PYTHON_API, body.code, {
        headers: { "Content-Type": "text/plain" }
      });
    }

    if (response) {
      if (response.data.endpoint !== null) {
        await dbService.insertModel(
          response.data.endpoint,
          response.data.platform,
          requestIp
        );
      }
    }
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.runCode = async function createCode(uuid, body) {
  try {
    const result = await dbService.findUUID(uuid);
    console.log(result);
    if (result) {
      if (result.platform === "node") {
        return axios.post(process.env.NODE_API + "/rest/" + uuid, body, {
          headers: { "Content-Type": "application/json" }
        });
      } else if (result.platform === "java") {
        return axios.post(process.env.JAVA_API + "/run/" + uuid, body);
      } else if (result.platform === "python") {
        return axios.post(process.env.PYTHON_API + "/run/" + uuid, body);
      }
    }
    return "error-api";
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.exampleCode = async function exampleCode(body) {
  try {
    console.log("--- example -- " + body.platform);
    //TODO
    return "error-api";
  } catch (e) {
    console.error(e);
    throw e;
  }
};
