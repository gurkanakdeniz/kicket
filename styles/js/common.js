function currentPath() {
  var response =
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "");
  return response;
}

function currentPlatform() {
  return $("#platform")
    .find(".active")
    .attr("value");
}

function currentTheme() {
  return $("#theme")
    .find(".active")
    .attr("value");
}
