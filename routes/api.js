var express = require("express");
var router = express.Router();

var apiController = require("../controllers/api.controller");

router.post("/create", apiController.createCode);
router.get("/run/:uuid", apiController.runGetCode);
router.post("/run/:uuid", apiController.runPostCode);
router.post("/example", apiController.exampleCode);
router.get("/exist/:uuid", apiController.getExistCode);

module.exports = router;
