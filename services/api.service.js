const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./db.service");
const createUtilityService = require("./create.utility.service");
const runUtilityService = require("./run.utility.service");
const existUtilityService = require("./exist.utility.service");
const exampleUtilityService = require("./example.utility.service");
const commonUtilityService = require("./common.utility.service");

exports.createCode = async function createCode(body, requestIp) {
  try {
    let response = null;
    let api = await createUtilityService.getApi(body.platform);
    let header = await createUtilityService.getHeader(body.platform);
    let bodyData = await createUtilityService.getBody(body.platform, body);
    // console.log(api, header, bodyData);

    var timeout = await commonUtilityService.getTimeout();

    response = await axios.post(api, bodyData, {
      headers: header,
      timeout: timeout
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

      var timeout = await commonUtilityService.getTimeout();

      if (platform !== "html") {
        response = await axios.post(api + uuid, bodyData, {
          headers: header,
          timeout: timeout
        });
      } else {
        response = await axios.get(api + uuid, bodyData, {
          headers: header,
          timeout: timeout
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

    var timeout = await commonUtilityService.getTimeout();

    return axios.get(api, {
      headers: header,
      timeout: timeout
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.getExistCode = async function getExistCode(uuid, ip) {
  try {
    const result = await dbService.findUUID(uuid);
    if (result) {
      let platform = result.platform;
      let api = await existUtilityService.getApi(platform);
      return axios.get(api + uuid);
    } else {
      const response = {
        data: {
          code:
            "/* kicketCode: 'N993',kicketType: 'error', kicketMessage: 'No Such API'",
          platform: "node"
        }
      };
      return response;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.init = async function init() {
  try {
    var initApis = process.env.INIT;

    if (initApis === "true") {
      var timeout = await commonUtilityService.getTimeout();

      let platforms = ["node", "html", "java", "python", "go", "php"];

      for (var pl in platforms) {
        try {
          var platform = platforms[pl];

          let api = await exampleUtilityService.getApi(platform);
          let header = await exampleUtilityService.getHeader(platform);

          var response = axios.get(api, {
            headers: header,
            timeout: timeout
          });

          console.error("init -> " + platform);
        } catch (ex) {
          console.error(ex);
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};
