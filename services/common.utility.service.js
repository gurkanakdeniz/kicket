exports.getTimeout = async function getTimeout() {
  try {
    var timeout = process.env.TIMEOUT;

    if (timeout) {
      return timeout;
    }
  } catch (e) {
    console.error(e);
  }

  return 1000 * 20;
};
