$(document).ready(function() {
  $(".body").click(function(e) {
    if ($(e.target).hasClass("open")) {
      $(this).removeClass("open");
    }
  });
  
  $(".ham").click(function() {
    $(".body").toggleClass("open");
  });
});

