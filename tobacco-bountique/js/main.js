
$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 567,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.brand_carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: false
    });

    if ($(window).width() > 576) {
        $('.brand_slider').remove('slick');
    } else {
        $('.brand_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false
        });
    };

    

    $('.review').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: false,
        focusOnSelect: true,
        prevArrow: false,
        dots: false,
        infinite: true,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});