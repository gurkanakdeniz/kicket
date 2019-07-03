function setEditorTheme(tname) {
  editor.setTheme("ace/theme/" + tname);
}
function setEditorLanguage(lname) {
  lname === "go" ? (lname = lname + "lang") : lname;
  editor.getSession().setMode("ace/mode/" + lname);
}
var editor = ace.edit("editor");
editor.setShowPrintMargin(false);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
// document.getElementById("editor").style.fontSize = "16px";

formatCodeEditor();

var jsbOptsEditor = {
  indent_size: 4
};
function formatCodeEditor() {
  // node, java, py, go
  var session = editor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOptsEditor));
}

function formatCodeEditorHTML() {
  // html
  var session = editor.getSession();
  session.setValue(html_beautify(session.getValue(), jsbOptsEditor));
}

var reqEditor = ace.edit("reqBody");
reqEditor.setShowPrintMargin(false);
reqEditor.setTheme("ace/theme/monokai");
reqEditor.getSession().setMode("ace/mode/json");
// document.getElementById("reqBody").style.fontSize = "16px";

formatCodeRequest();

var jsbOptsRequest = {
  indent_size: 2
};
function formatCodeRequest() {
  var session = reqEditor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOptsRequest));
}

var resEditor = ace.edit("resBody");
resEditor.setShowPrintMargin(false);
resEditor.setTheme("ace/theme/monokai");
resEditor.getSession().setMode("ace/mode/json");
// document.getElementById("resBody").style.fontSize = "16px";
resEditor.setReadOnly(true);

formatCodeResponse();

var jsbOptsResponse = {
  indent_size: 2
};
function formatCodeResponse() {
  var session = resEditor.getSession();
  session.setValue(js_beautify(session.getValue(), jsbOptsResponse));
}

$("#editor textarea").bind("paste", function(e) {
  let currentMode = editor.getSession().getMode().$id;
  currentMode = currentMode.substr(currentMode.lastIndexOf("/") + 1);
  currentMode === "html" ? formatCodeEditorHTML() : formatCodeEditor();
});

$(".nav-tabs")
  .on("click", "a", function(e) {
    e.preventDefault();
    if (!$(this).hasClass("add-api")) {
      $(this).tab("show");
    }
  })
  .on("click", "span", function() {
    var anchor = $(this).siblings("a");
    $(anchor.attr("href")).remove();
    $(this)
      .parent()
      .remove();
    $(".nav-tabs li")
      .children("a")
      .first()
      .click();
  });

$(".add-api").click(function(e) {
  /* e.preventDefault();
  var id = $(".nav-tabs").children().length; //think about it ;)
  var tabId = "api_" + id;
  $(this)
    .closest("li")
    .before(
      '<li class="nav-item waves-effect waves-light"><a class="nav-link" id="api-' +
        id +
        '-tab" data-toggle="tab" href="#api_' +
        id +
        '"role="tab">Request #' +
        id +
        "</a></li>"
    );
  $(".tab-content").append(
    '<div class="tab-pane" id="' +
      tabId +
      '">Contact Form: New Contact ' +
      id +
      "</div>"
  );
  $(".nav-tabs li:nth-child(" + id + ") a").click(); */
});
