function deployLoadInit() {
  $("#submitApi").attr("disabled", true);
  $("#editor").addClass("animated zoomOut");
  setTimeout(function() {
    $("#editor").addClass("d-none");
    $("#deploy-load").removeClass("d-none");
    $("#deploy-load").addClass("animated zoomIn");
  }, 500);
}

function deployLoadError() {
  $("#code-statu").html("Umm, There's a bug in here somewhere.");
  $("#code-statu").removeClass("animated flash infinite slower");
  setTimeout(function() {
    $("#deploy-load").removeClass("zoomIn");
    $("#deploy-load").addClass("animated zoomOut");
    setTimeout(function() {
      $("#deploy-load").addClass("d-none");
      $("#editor").removeClass("d-none zoomOut");
      $("#editor").addClass("animated zoomIn");
    }, 500);
    $("#submitApi").attr("disabled", false);
  }, 1500);
}

function deployLoadReverse() {
  $("#code-statu").html("done");
  $("#code-statu").removeClass("animated infinite slower");
  $("#code-statu").removeClass("flash shake");
  setTimeout(function() {
    $("#deploy-load").removeClass("zoomIn");
    $("#deploy-load").addClass("animated zoomOut");
    setTimeout(function() {
      $("#deploy-load").addClass("d-none");
      $("#editor").removeClass("d-none zoomOut");
      $("#editor").addClass("animated zoomIn");
    }, 500);
    $("#submitApi").attr("disabled", false);
  }, 1500);
}

function clearDeployAnimation() {
  $("#code-statu").html('<i class="fas fa-terminal mr-3"></i>compiling');
  $("#code-statu").addClass("animated flash infinite slower");
  $("#editor").removeClass("animated zoomIn");
  $("#deploy-load").removeClass("animated zoomOut");
}

function editorLoadInit() {
  $("#editor").css("filter", "blur(3px)");
  $("#editor-load").removeClass("d-none");
  editor.setReadOnly(true);
}

function clearEditorLoad() {
  $(".loading-indicator > .dot").removeClass("loading-indicator-error");
  $("#editor-load-text").text("preparing editor");
  $("#editor").css("filter", "blur(0px)");
  $("#editor-load").addClass("d-none");
  editor.setReadOnly(false);
}
