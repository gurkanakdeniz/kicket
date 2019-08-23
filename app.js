const createError = require("http-errors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
const apiService = require("./services/api.service");

var favicon = require("serve-favicon");
const kicketLogger = require("./utils/kicket.logger");
dotenv.config();

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true
});

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));
app.use(favicon(__dirname + "/styles/icon/api.ico"));

app.use("/", indexRouter);
app.use("/api", apiRouter);

apiService.init();
kicketLogger.doit("Application is running with no problems...");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
