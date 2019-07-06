exports.getApi = async function getApi(platform) {
  if (platform === "node") {
    return process.env.NODE_API + "/run/exist/";
  }
};
