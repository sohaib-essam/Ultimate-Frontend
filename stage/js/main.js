$(function () {
  "use strict";
  $(".toggle-sidebar").on("click", function () {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });

  //toggle submenu
  $(".toggle-submenu").on("click", function () {
    $(this).find(".fa-angle-right").toggleClass("down");
    $(this).next(".child-links").slideToggle();
  });

  // open / Close FullScreen
  $(".toggle-fullscreen").on("click", function () {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      //page is now full screen
      openFullscreen();
    } else {
      //Page Is Not Full Screen
      closeFullscreen();
    }
  });

  //Toggle Settings
  $(".toggle-settings").on("click", function () {
    $(this).find("i").toggleClass("fa-spin");
    $(this).parent().toggleClass("hide-settings");
  });
});

var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
