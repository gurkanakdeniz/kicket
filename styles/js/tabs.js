// setTimeout(activeTab, 2000);
$("#editorSettings").click(function() {
  activeTabLanguage();
  activeTabTheme();
});

function activeTabLanguage() {
  var tabs = $("#pl .tabs");
  var selector = $("#pl .tabs").find("a").length;
  var activeItem = tabs.find(".active");
  var activeWidth = activeItem.innerWidth();
  $("#pl .selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
  });
}

function activeTabTheme() {
  var tabs = $("#theme .tabs");
  var selector = $("#theme .tabs").find("a").length;
  var activeItem = tabs.find(".active");
  var activeWidth = activeItem.innerWidth();
  $("#theme .selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
  });
}

$("#theme .tabs").on("click", "a", function(e) {
  e.preventDefault();
  $("#theme .tabs a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $("#theme .selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });
  setEditorTheme(currentTheme());
});

$("#pl .tabs").on("click", "a", function(e) {
  e.preventDefault();
  $("#pl .tabs a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $("#pl .selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });

  setEditorLanguage(
    currentPlatform() === "node" ? "javascript" : currentPlatform()
  );
});
