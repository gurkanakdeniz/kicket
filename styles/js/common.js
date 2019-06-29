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

function goToByScroll(id) {
  $("html,body").animate(
    {
      scrollTop: $("#" + id).offset().top
    },
    "slow"
  );
}

$("#cc").click(function() {
  $("#cc span").show();
  var copyText = currentPath() + "/api/run/" + $("#basic-url").val();
  console.log(copyText);
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  setTimeout(() => {
    $("#cc span").hide();
  }, 1000);
});
