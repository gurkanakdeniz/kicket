$("#submitApi").click(function() {
  $.ajax({
    url: "/api/create",
    type: "POST",
    contentType: "text/plain",
    data: editor.getValue(),
    success: function(data) {
      console.log(data);
      $("#basic-url").val(data.endpoint);
    }
  });
});

$("#sendReq").click(function() {
  $.ajax({
    url: "/api/run/" + $("#basic-url").val(),
    type: "POST",
    contentType: "application/json",
    data: reqEditor.getValue(),
    success: function(data) {
      resEditor.setValue(JSON.stringify(data));
      formatCodeResponse();
    }
  });
});

$("#basic-addon3").text(
  "http://localhost:3003/rest/" /* window.location.href */
);
