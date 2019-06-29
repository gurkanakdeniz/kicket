var express = require("express");
var router = express.Router();

var apiController = require("../controllers/api.controller");

router.post("/create", apiController.createCode);
router.get("/run/:uuid", apiController.runCode);
router.post("/run/:uuid", apiController.runCode);
router.post("/example", apiController.exampleCode);

module.exports = router;
