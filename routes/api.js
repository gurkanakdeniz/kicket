var express = require("express");
var router = express.Router();

var apiController = require("../controllers/api.controller");

router.post("/create", apiController.createCode);
router.post("/run/:uuid", apiController.runCode);

module.exports = router;
