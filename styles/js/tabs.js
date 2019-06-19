// setTimeout(activeTab, 2000);
$("#editorSettings").click(function() {
  activeTab();
});

function activeTab() {
  var tabs = $(".tabs");
  var selector = $(".tabs").find("a").length;
  var activeItem = tabs.find(".active");
  var activeWidth = activeItem.innerWidth();
  $(".selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px"
  });
}

$(".tabs").on("click", "a", function(e) {
  e.preventDefault();
  $(".tabs a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });
});
