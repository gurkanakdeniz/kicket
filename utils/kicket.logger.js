const SimpleNodeLogger = require("simple-node-logger"),
  opts = {
    logFilePath: "kicket.log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss.SSS"
  },
  log = SimpleNodeLogger.createSimpleLogger(opts);

exports.doit = function(object) {
  log.info("=== KICKET LOG BEGIN ===");
  log.info(object);
  log.info("=== KICKET LOG END===");
};
