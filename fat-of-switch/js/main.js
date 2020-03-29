$(document).ready(function() {

    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 900;
        if ($(window).scrollTop() > navHeight) {
            $('.navigation_wrap').addClass('fixed_menu');
        } else {
            $('.navigation_wrap').removeClass('fixed_menu');
        }
    });

    $('.hamburger__click').click(function() {
        $('.hamburger').toggleClass('hamburger-active');
        $('.header_menu').toggleClass('active');
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".hamburger__click").length) return;
        $('.hamburger').removeClass('hamburger-active');
        $('.header_menu').removeClass('active');
        event.stopPropagation();
    });

    $('.header_menu a').on('click', function(e) {
        e.preventDefault();
        $('.hamburger').toggleClass('hamburger-active');
        $('.header_menu').toggleClass('active');
    });

    var $page = $('html, body');
    $('.navigation_wrap a[href*="#"], .header_text a[href*="#"], .top a[href*="#"], .privacy_block a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 99
        }, 800);
        return false;
    });

   // function and variables, 'unslick' while window size reach maximum width (641px)
    var minWidth = 770,
      slickVar = {
      	lazyLoad: 'ondemand',
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: minWidth,
            settings: 'unslick'
          }
        ]
      },
      runSlick = function() {
        $('.stories_block, .gallery_block').slick(slickVar);
      };

      $(window).on('resize', function(){
        var width = $(window).width();
        if(width < minWidth) {
          runSlick();
        }
      });

    (function($) {
        $.fn.countTo = function(options) {
            // merge the default plugin settings with the custom options
            options = $.extend({}, $.fn.countTo.defaults, options || {});

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(options.speed / options.refreshInterval),
                increment = (options.to - options.from) / loops;

            return $(this).each(function() {
                var _this = this,
                    loopCount = 0,
                    value = options.from,
                    interval = setInterval(updateTimer, options.refreshInterval);

                function updateTimer() {
                    value += increment;
                    loopCount++;
                    $(_this).html(value.toFixed(options.decimals));

                    if (typeof(options.onUpdate) == 'function') {
                        options.onUpdate.call(_this, value);
                    }

                    if (loopCount >= loops) {
                        clearInterval(interval);
                        value = options.to;

                        if (typeof(options.onComplete) == 'function') {
                            options.onComplete.call(_this, value);
                        }
                    }
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0, // the number the element should start at
            to: 100, // the number the element should end at
            speed: 1000, // how long it should take to count between the target numbers
            refreshInterval: 100, // how often the element should be updated
            decimals: 0, // the number of decimal places to show
            onUpdate: null, // callback method for every time the element is updated,
            onComplete: null, // callback method for when the element finishes updating
        };
    })(jQuery);




    $(window).scroll(function() {
        var scrollEl = $('.achievement');

        var topOfLine = scrollEl.offset().top - 400,
            topOfWindow = $(window).scrollTop();

        if (topOfLine < topOfWindow) {
            jQuery(function($) {
                $('.timer1').countTo({
                    from: 0,
                    to: 92,
                    speed: 2000,
                    refreshInterval: 10,

                });
                $('.timer').countTo({
                    from: 0,
                    to: 120,
                    speed: 2000,
                    refreshInterval: 10,
                    onComplete: function(value) {
                        console.debug(this);
                    }
                });
            });
            $(window).off('scroll');
        }
    });





    setTimeout(function() {
        document.getElementById('hideBlock').style.right = '0px';
    }, 1000);
    $('.md-close a').click(function() {
        $('#hideBlock').css('right', '-100%')
    });

    $("a[data-fancybox='gallery']").fancybox();
});