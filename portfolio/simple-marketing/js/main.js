$(document).ready(function(){
	$('.hamburger__click').click(function(){
		$('.hamburger').toggleClass('hamburger-active');
		$('.hamburger-menu').toggleClass('hamburger-menu_active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".hamburger__click").length ) return;
		$('.hamburger').removeClass('hamburger-active');
		event.stopPropagation();
	});

	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
		var t = 800;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});
	
	var nav = $('.navigation');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			nav.addClass("fixed-nav");
		} else {
			nav.removeClass("fixed-nav");
		}
	});
});
new WOW().init();