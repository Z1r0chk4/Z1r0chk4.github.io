$(document).ready(function(){

	$(window).bind('scroll', function() {
		var navHeight = $( window ).height() -80;
		if ($(window).scrollTop() > navHeight) {
			$('.nav').addClass('fixed_menu');
		} else {
			$('.nav').removeClass('fixed_menu');
		}
	});

	$('.hamburger__click').click(function(){
		$('.hamburger').toggleClass('hamburger-active');
		$('.header_menu').toggleClass('active');
	});
	$(document).click(function(event) {
		if ($(event.target).closest(".hamburger__click").length ) return;
		$('.hamburger').removeClass('hamburger-active');
		$('.header_menu').removeClass('active');
		event.stopPropagation();
	});

	$('.header_menu a').on('click', function(e){
		e.preventDefault();
		$('.hamburger').toggleClass('hamburger-active');
		$('.header_menu').toggleClass('active');
	});

	var $page = $('html, body');
	$('.page_header a[href*="#"], .top  a[href*="#"], .privacy_block a ').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top -90
		}, 800);
		return false;
	});

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: true
    });

    $("a[data-fancybox='gallery']").fancybox();

	if ($(window).width() >= 768) {
    	$('.gallery_slider').remove('slick');
    } else {
    	$('.gallery_slider').slick({
	        fade: true,
	        slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
	        arrows: false
	    });
    }


	$('.testimonial').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
			breakpoint: 768,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
				}
			},
			{
			breakpoint: 576,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
				}
			}
		]
	});



	setTimeout(function() {
		document.getElementById('hideBlock').style.top = '0px';
		}, 500);
			$('.md-close button').click(function() {
			$('#hideBlock').css('top', '-100%')
	});
});
