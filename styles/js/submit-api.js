$("#submitApi").click(function() {
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
      console.log(data);
      $("#basic-url").val(data.endpoint);
    }
  });
});

$("#sendReq").click(function() {
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
  var body = {
    platform: currentPlatform()
  };
  $.ajax({
    url: currentPath() + "/api/example/",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(body),
    success: function(data) {
      editor.setValue(JSON.stringify(data));
      formatCodeResponse();
    }
  });
}

$("#basic-addon3").text("" + currentPath() + "/api/");
