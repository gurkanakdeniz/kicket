$("#existApiGET").click(function(e) {
  if ($("#apiField").val() !== "") {
    clearEditorLoad();
    editorLoadInit();
    $.ajax({
      url: currentPath() + "/api/exist/" + $("#apiField").val(),
      type: "GET",
      contentType: "application/json",
      data: "",
      success: function(data) {
        editor.setValue(data.code);
        let codePlatform = data.platform;
        $("a[value='" + codePlatform + "']").addClass("active");
        var activeWidth = $("a[value='" + codePlatform + "']").innerWidth();
        var itemPos = $("a[value='" + codePlatform + "']").position();
        $("#pl .selector").css({
          left: itemPos.left + "px",
          width: activeWidth + "px"
        });
        setEditorLanguage(
          codePlatform === "node" ? "javascript" : codePlatform
        );
        if (codePlatform === "html") {
          formatCodeEditorHTML();
        } else if (codePlatform === "go") {
          formatCodeEditorGo();
        } else {
          formatCodeEditor();
        }
        clearEditorLoad();
      },
      error: function(error) {
        $(".loading-indicator > .dot").addClass("loading-indicator-error");
        $("#editor-load-text").text("try again, later");
        $("#submitApi").attr("disabled", true);
        setTimeout(function() {
          clearEditorLoad();
        }, 2000);
      }
    });
  } else {
    if ($(".exist-api-input").css("visibility") == "visible") {
      $(".exist-api-input").css("transform", "scaleX(0)");
      $(".exist-api-input").css("visibility", "hidden");
      $("#existApiGET").removeClass("border-first-btn-half");
      $("#existApiGET").addClass("border-first-btn-full");
    } else {
      $(".exist-api-input").css("transform", "scaleX(1)");
      $(".exist-api-input").css("visibility", "visible");
      $("#existApiGET").removeClass("border-first-btn-full");
      $("#existApiGET").addClass("border-first-btn-half");
    }
  }
});

$("#updateApi").click(function(e) {
  if ($("#apiField").val() !== "") {
    console.log("update function!");
  } else {
    $("#apiField").addClass("animated shake faster empty-field");
  }
});

$("#apiField").keyup(function() {
  if ($("#apiField").val() !== "") {
    $("#div-icon").removeClass("fa-angle-right");
    $("#div-icon").addClass("fa-angle-left");
  } else {
    $("#div-icon").removeClass("fa-angle-left");
    $("#div-icon").addClass("fa-angle-right");
  }
  $("#apiField").removeClass("animated shake faster empty-field");
});
