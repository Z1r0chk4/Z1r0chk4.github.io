$(document).ready(function(){

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
		}
		else {
			$('#main-nav').removeClass('active');
		};
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		swipe: false,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		draggable: false,
		centerMode: true,
		focusOnSelect: true,
		slide: 'div'
	});
	
	$('.plan__switch').click(function(){
		$('.switch').toggleClass('switch-right');
		if ($('.plan__switch-left').hasClass('plan__switch-active')) {
			$('.plan__switch-left').removeClass('plan__switch-active')
			$('.plan__switch-right').addClass('plan__switch-active')
			$('.box-left').removeClass('box-active')
			$('.box-right').addClass('box-active')
		} else {
			$('.plan__switch-right').removeClass('plan__switch-active');
			$('.plan__switch-left').addClass('plan__switch-active')
			$('.box-right').removeClass('box-active');
			$('.box-left').addClass('box-active')
		}
	});

	$('.box').click(function(){
		$('.switch').toggleClass('switch-right');
		if ($('.plan__switch-left').hasClass('plan__switch-active')) {
			$('.plan__switch-left').removeClass('plan__switch-active')
			$('.plan__switch-right').addClass('plan__switch-active')
			$('.box-left').removeClass('box-active')
			$('.box-right').addClass('box-active')
		} else {
			$('.plan__switch-right').removeClass('plan__switch-active');
			$('.plan__switch-left').addClass('plan__switch-active')
			$('.box-right').removeClass('box-active');
			$('.box-left').addClass('box-active')
		}
	});
	
	$('.hamburger__click').click(function(){
		$('.hamburger').toggleClass('hamburger-active');
		$('.hamburger-menu').toggleClass('hamburger-menu_active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".hamburger__click").length ) return;
		$('.hamburger').removeClass('hamburger-active');
		$('.hamburger-menu').removeClass('hamburger-menu_active');
		event.stopPropagation();
	});
});
new WOW().init();
