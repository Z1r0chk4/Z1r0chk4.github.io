$(document).ready(function() {
  $(".body").click(function(e) {
    if ($(e.target).hasClass("open")) {
      $(this).removeClass("open");
    }
  });

  $(document).click(function(event) {
    if ($(event.target).closest(".hamburger").length) return;
    $('.hamburger > svg').removeClass('active');
    $('.body').removeClass('open');
    $('.main_menu').removeClass('open');
    event.stopPropagation();
  });
  
  $(".hamburger").click(function() {
    $('.hamburger > svg').toggleClass('active');
    $(".body").toggleClass("open");
    $('.main_menu').toggleClass('open');
  });

  $('.main_menu a').on('click', function(e) {
    e.preventDefault();
    $('.hamburger > svg').toggleClass('active');
    $('.body').toggleClass('open');
    $('.main_menu').toggleClass('open');
  });

  var $page = $('html, body');
  $('.main_menu a').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

});

