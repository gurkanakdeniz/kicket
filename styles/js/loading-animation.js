function loadingInit() {
  $("#submitApi").attr("disabled", true);
  $("#editor").addClass("animated zoomOut");
  setTimeout(function() {
    $("#editor").addClass("d-none");
    $("#loading").removeClass("d-none");
    $("#loading").addClass("animated zoomIn");
  }, 500);
}

function loadingReverse() {
  $("#code-statu").html('<i class="far fa-thumbs-up mr-3"></i>');
  setTimeout(function() {
    $("#loading").removeClass("zoomIn");
    $("#loading").addClass("animated zoomOut");
    setTimeout(function() {
      $("#loading").addClass("d-none");
      $("#editor").removeClass("d-none zoomOut");
      $("#editor").addClass("animated zoomIn");
    }, 500);
    $("#submitApi").attr("disabled", false);
  }, 1500);
}

function clearAnimation() {
  console.log("clear");
  $("#code-statu").html('<i class="fas fa-terminal mr-3"></i>compiling');
  $("#editor").removeClass("animated zoomIn");
  $("#loading").removeClass("animated zoomOut");
}

function exampleAnimation() {
  $("#editor").css("filter", "blur(3px)");
  editor.setReadOnly(true);
}

function clearExample() {
  $("#editor").css("filter", "blur(0px)");
  editor.setReadOnly(false);
}
