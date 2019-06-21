exports.getApi = async function getApi(platform) {
  if (platform === "java") {
    return process.env.JAVA_API + "/create";
  } else if (platform === "node") {
    return process.env.NODE_API + "/create";
  } else if (platform === "html") {
    return process.env.HTML_API + "/create";
  } else if (platform === "python") {
    return process.env.PYTHON_API + "/create";
  }
};

exports.getHeader = async function getHeader(platform) {
  if (platform === "java") {
    return { "Content-Type": "application/json" };
  } else if (platform === "node") {
    return { "Content-Type": "text/plain" };
  } else if (platform === "html") {
    return { "Content-Type": "text/plain" };
  } else if (platform === "python") {
    return { "Content-Type": "text/plain" };
  }
};

exports.getBody = async function getBody(platform, data) {
  if (platform === "java") {
    return data;
  } else if (platform === "node") {
    return data.code;
  } else if (platform === "html") {
    return data.code;
  } else if (platform === "python") {
    return data.code;
  }
};
