var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/", function(req, res, next) {
  var MobileDetect = require("mobile-detect"),
    md = new MobileDetect(req.headers["user-agent"]);
  if (md.mobile()) {
    res.sendFile(path.join(__dirname + "/../views/mobile.html"));
  } else {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
  }
});

router.get("/:force", function(req, res, next) {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
});

module.exports = router;
