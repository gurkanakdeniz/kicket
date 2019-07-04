$("#submitApi").click(function() {
  //clearAnimation();
  // loadingInit();
  var body = {
    platform: currentPlatform(),
    code: editor.getValue()
  };
  $.ajax({
    url: currentPath() + "/api/create",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(body),
    beforeSend: function() {
      showLoading();
    },
    success: function(data) {
      // console.log(data.endpoint);
      // console.log(data);
      hideLoading();
      $("#basic-url").val(data.endpoint);
      goToByScroll("testapi");
    },
    error: function(jqXHR, textStatus, errorThrown) {
      hideLoading();
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
  //  exampleAnimation();
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
      clearExample();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      hideLoading();
    }
  });
}

$("#basic-addon3").text("" + currentPath() + "/api/run/");
