$("#submitApi").click(function() {
  clearDeployAnimation();
  deployLoadInit();
  var body = {
    platform: currentPlatform(),
    code: editor.getValue()
  };
  $.ajax({
    url: currentPath() + "/api/create",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(body),
    success: function(data) {
      setTimeout(function() {
        deployLoadReverse();
      }, 1000);
      setTimeout(function() {
        $("#basic-url").val(data.endpoint);
        goToByScroll("testapi");
      }, 2500);
    },
    error: function(error) {
      deployLoadError();
    }
  });
});

$("#sendReqGET").click(function() {
  $.ajax({
    url: currentPath() + "/api/run/" + $("#basic-url").val(),
    type: "GET",
    contentType: "application/json",
    data: reqEditor.getValue(),
    success: function(data) {
      resEditor.setValue(JSON.stringify(data));
      formatCodeResponse();
    }
  });
});

$("#sendReqPOST").click(function() {
  $.ajax({
    url: currentPath() + "/api/run/" + $("#basic-url").val(),
    type: "POST",
    contentType: "application/json",
    data: reqEditor.getValue(),
    success: function(data) {
      resEditor.setValue(JSON.stringify(data));
      formatCodeResponse();
    }
  });
});

function getExample() {
  clearEditorLoad();
  editorLoadInit();
  var body = {
    platform: currentPlatform()
  };
  $.ajax({
    url: currentPath() + "/api/example/",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(body),
    success: function(data) {
      editor.setValue(data.exampleCode);
      if (body.platform === "html") {
        formatCodeEditorHTML();
      } else if (body.platform === "go") {
        formatCodeEditorGo();
      } else {
        formatCodeEditor();
      }

      if (data.exampleComment) {
        editor.session.insert({ row: 0, column: 0 }, data.exampleComment);
      }
      reqEditor.setValue(data.exampleRequest);
      formatCodeRequest();
      clearEditorLoad();
    },
    error: function(error) {
      $(".loading-indicator > .dot").addClass("loading-indicator-error");
      $("#editor-load-text").text("try again, later");
      $("#pl").removeClass("disabled-div");
      $("#submitApi").attr("disabled", true);
    }
  });
}

$("#basic-addon3").text("" + currentPath() + "/api/run/");
