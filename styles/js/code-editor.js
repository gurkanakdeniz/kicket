var editor = ace.edit("editor");
editor.setShowPrintMargin(false);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
document.getElementById("editor").style.fontSize = "16px";

setTimeout(formatCode, 1000);

var jsbOpts = {
  indent_size: 4
};
function formatCode() {
  var session = editor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOpts));
}
