var editor = ace.edit("editor");
editor.setShowPrintMargin(false);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
// document.getElementById("editor").style.fontSize = "16px";

formatCodeEditor();

var jsbOpts = {
  indent_size: 4
};
function formatCodeEditor() {
  var session = editor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOpts));
}

var reqEditor = ace.edit("reqBody");
reqEditor.setShowPrintMargin(false);
reqEditor.setTheme("ace/theme/monokai");
reqEditor.getSession().setMode("ace/mode/json");
// document.getElementById("reqBody").style.fontSize = "16px";

formatCodeRequest();

var jsbOpts = {
  indent_size: 2
};
function formatCodeRequest() {
  var session = reqEditor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOpts));
}

var resEditor = ace.edit("resBody");
resEditor.setShowPrintMargin(false);
resEditor.setTheme("ace/theme/monokai");
resEditor.getSession().setMode("ace/mode/json");
// document.getElementById("resBody").style.fontSize = "16px";
resEditor.setReadOnly(true);

formatCodeResponse();

var jsbOpts = {
  indent_size: 2
};
function formatCodeResponse() {
  var session = resEditor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOpts));
}
