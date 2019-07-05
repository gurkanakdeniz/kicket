$("#submitApi").click(function() {
  clearDeployAnimation();
  deployLoadInit();
  var body = {
    platform: currentPlatform(),
    code: editor.getValue()
  };
  $.ajax({
    url: currentPath() + "/api/create1",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(body),
    beforeSend: function() {
      showLoading();
    },
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
    beforeSend: function() {
      showLoading();
    },
    success: function(data) {
      hideLoading();
      resEditor.setValue(JSON.stringify(data));
      formatCodeResponse();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      hideLoading();
    }
  });
});

$("#sendReqPOST").click(function() {
  $.ajax({
    url: currentPath() + "/api/run/" + $("#basic-url").val(),
    type: "POST",
    contentType: "application/json",
    data: reqEditor.getValue(),
    beforeSend: function() {
      showLoading();
    },
    success: function(data) {
      hideLoading();
      resEditor.setValue(JSON.stringify(data));
      formatCodeResponse();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      hideLoading();
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
    beforeSend: function() {
      showLoading();
    },
    success: function(data) {
      hideLoading();
      editor.setValue(data.exampleCode);
      if (body.platform === "html") {
        formatCodeEditorHTML();
      } else if (body.platform === "go") {
        formatCodeEditorGo();
      } else {
        formatCodeEditor();
      }
      reqEditor.setValue(data.exampleRequest);
      formatCodeRequest();
      clearEditorLoad();
    },
    error: function(error) {
      $(".loading-indicator > .dot").addClass("loading-indicator-error");
      $("#editor-load-text").text("try again, later");
    }
  });
}

$("#basic-addon3").text("" + currentPath() + "/api/run/");
