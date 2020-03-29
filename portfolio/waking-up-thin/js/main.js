$(document).ready(function(){
 
	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() -100;
		if ($(window).scrollTop() > navHeight) {
			$('.nav').addClass('fixed_menu');
		} else {
			$('.nav').removeClass('fixed_menu');
		}
	});

	$('.hamburger__click').click(function(){
		$('.hamburger').toggleClass('hamburger-active');
		$('.header_nav').toggleClass('active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".hamburger__click").length ) return;
		$('.hamburger').removeClass('hamburger-active');
		$('.header_nav').removeClass('active');
		event.stopPropagation();
	});

	$('.header_menu a').on('click', function(e){
		e.preventDefault();
		$('.hamburger').toggleClass('hamburger-active');
		$('.header_nav').toggleClass('active');
	});

	var $page = $('html, body');
	$('.page_header a[href*="#"], .page_footer a[href*="#"], .privacy_block a').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top -60
		}, 800);
		return false;
	});


	$('.team').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
  		autoplaySpeed: 1500,
		responsive: [
			{
			breakpoint: 1200,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
			breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				dots: true
				}
			},
			{
			breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
				}
			}
		]
	});

	$(window).on('load resize', function() {
		if ($(window).width() <= 770) {
			$(".wrap_price").slick({
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        dots: true,
		        arrows: false,
		        adaptiveHeight: false,
		        responsive: [
				{
					breakpoint: 660,
						settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
							}
					}
				]
			});
		} else {
			$(".wrap_price").slick("unslick");
		}
	});

	$('.comments').slick({
		dots: true,
		loop: true,
		infinite: true,
		arrows: false,
		speed: 300,
		centerMode: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 1500,
 		dots: false,
		responsive: [
			{
			breakpoint: 992,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
			breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
				}
			}
		]
	});

	new WOW().init();

	//modal-window
	setTimeout(function() {
		document.getElementById('hideBlock').style.display = 'block';
	 }, 1000);
	 $('.md-close button').click(function() {
		  $('#hideBlock').css('display', 'none')
	  });
});