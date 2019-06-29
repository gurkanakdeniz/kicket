const requestIp = require("request-ip");
const api = require("../services/api.service");
const logger = require("../utils/kicket.logger");

exports.createCode = async function(req, res, next) {
  try {
    var response = await api.createCode(
      req.body,
      requestIp.getClientIp(req).toString()
    );
    logger.doit(
      "Creating an api by guest's IP: " + requestIp.getClientIp(req).toString()
    );
    return res.status(200).json(response.data);
  } catch (e) {
    logger.doit(
      "Something went wrong for guest's IP: " +
        requestIp.getClientIp(req).toString() +
        " ,Error Message: " +
        e.message
    );
    return res.status(500).json({ message: e.message });
  }
};

exports.runCode = async function(req, res, next) {
  try {
    var response = await api.runCode(
      req.params.uuid,
      req.body,
      requestIp.getClientIp(req).toString()
    );
    logger.doit(
      "Running API with UUID: " +
        req.params.uuid +
        " ,Guest's IP: " +
        requestIp.getClientIp(req).toString()
    );
    return res.status(200).send(response.data);
  } catch (e) {
    logger.doit(
      "Something went wrong for guest's IP: " +
        requestIp.getClientIp(req).toString() +
        " ,Error Message: " +
        e.message
    );
    return res.status(500).json({ message: e.message });
  }
};

exports.exampleCode = async function(req, res, next) {
  try {
    logger.doit(
      "Getting example code for " +
        req.body.platform +
        " Guest's IP: " +
        requestIp.getClientIp(req).toString()
    );
    var response = await api.exampleCode(req.body);
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
