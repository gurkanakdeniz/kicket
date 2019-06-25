function initTips() {
  if (!localStorage.getItem("isOpened")) {
    $("body").addClass("nav__overlay-active");
  }
  localStorage.setItem("isOpened", true);
}
initTips();

function removeOverlay() {
  $("body").removeClass("nav__overlay-active");
}

(function($) {
  "use strict";
  var app = (function() {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__overlay__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function() {
        return toggleClass(body, "nav__overlay-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();
})(jQuery);
