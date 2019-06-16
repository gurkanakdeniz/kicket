var api = require("../services/api.service");

exports.createCode = async function(req, res, next) {
  try {
    console.log("createCode");
    var response = await api.createCode(req.body);
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

exports.runCode = async function(req, res, next) {
  try {
    console.log("runCode " + req.params.uuid);
    var response = await api.runCode(req.params.uuid, req.body);
    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
