$(document).ready(function(){
// slider
	$('.slick').slick({
		arrows:true,
		dots:true,
	});

// smooth scroll
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
		var t = 800;
		var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
		$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});

// hamburger
	$('.hamburger__click').click(function(){
		$('.hamburger').toggleClass('hamburger-active');
		$('.hamburger-menu').toggleClass('hamburger-menu_active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".hamburger__click").length ) return;
		$('.hamburger').removeClass('hamburger-active');
		event.stopPropagation();
	});
});
new WOW().init();