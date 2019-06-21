const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./db.service");
const createUtilityService = require("./create.utility.service");
const runUtilityService = require("./run.utility.service");
const exampleUtilityService = require("./example.utility.service");

exports.createCode = async function createCode(body, requestIp) {
  try {
    let response = null;
    let api = await createUtilityService.getApi(body.platform);
    let header = await createUtilityService.getHeader(body.platform);
    let bodyData = await createUtilityService.getBody(body.platform, body);
    console.log(api, header, bodyData);

    response = await axios.post(api, bodyData, {
      headers: header
    });

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

exports.runCode = async function runCode(uuid, body, ip) {
  try {
    const result = await dbService.findUUID(uuid);
    let response = null;
    if (result) {
      let platform = result.platform;
      let api = await runUtilityService.getApi(platform);
      let header = await runUtilityService.getHeader(platform);
      let bodyData = await runUtilityService.getBody(platform, body);

      if (platform !== "html") {
        response = await axios.post(api + uuid, bodyData, {
          headers: header
        });
      } else {
        response = await axios.get(api + uuid, bodyData, {
          headers: header
        });
      }

      await dbService.updateModel(result, ip);
    }
    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.exampleCode = async function exampleCode(body) {
  try {
    let platform = body.platform;
    let api = await exampleUtilityService.getApi(platform);
    let header = await exampleUtilityService.getHeader(platform);

    return axios.get(api, {
      headers: header
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};
