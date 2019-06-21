exports.getApi = async function getApi(platform) {
  if (platform === "node") {
    return process.env.NODE_API + "/example";
  } else if (platform === "html") {
    return process.env.HTML_API + "/example";
  } else if (platform === "java") {
    return process.env.JAVA_API + "/example";
  } else if (platform === "python") {
    return process.env.PYTON_API + "/example";
  }
};

exports.getHeader = async function getHeader(platform) {
  return { "Content-Type": "application/json" };
};
