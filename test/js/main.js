$(document).ready(function() {

  $('.header-slider').slick({
    arrows: true,
    dots: true
  });

  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger_active');
    $('.menu').toggleClass('menu_active')
  });

});