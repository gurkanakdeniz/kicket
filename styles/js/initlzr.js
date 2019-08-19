$(document).ready(function() {
  var currentEditorWidth = $(".editorOut").width();
  $("#editorHeading").trigger("click");
  $("#editor-load").width(currentEditorWidth);
  $("#deploy-load").width(currentEditorWidth);
});
