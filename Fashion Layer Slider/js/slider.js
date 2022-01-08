jQuery(document).ready(function($) {
    "use strict";


    /*
    Banner Slider*/
    // if ($('#tnit-banner-slider').length) {
    //     var outerCarousel = $('#tnit-banner-slider');
    //     outerCarousel.owlCarousel({
    //         loop: false,
    //         dots: false,
    //         nav: false,
    //         navText: '',
    //         items: 1,
    //         autoplay: false,
    //         smartSpeed: 4000,
    //         animateIn: 'zoomIn',
    //         animateOut: 'fadeOut',
    //         touchDrag: false,
    //         mouseDrag: false,
    //     });
    // }

    /*
    Old Owl Slide For Banner*/
    if ($('#tnit-banner-slider').length) {
        $('#tnit-banner-slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 2000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
                1199: {
                    items: 1,
                }
            }
        });
    }


    // Latest Updated Slider Jquery Code


    /*
    Owl Slide For Banner vertical*/
    if ($('#tnit-vertical-slider').length) {
        $('#tnit-vertical-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 4000,
            animateOut: 'slideOutUp',
            animateIn: 'slideInDown',
            // touchDrag: false,
            mouseDrag: false,
            rewindNav:false,
            rewindDots:false,
            rewind: false,

        });
    }


    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-house-slider').length) {
        $('#tnit-house-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: true,
            smartSpeed: 7000,
            animateOut: 'slideOutLeft',
            animateIn: 'slideInRight',
            // touchDrag: false,
            mouseDrag: false,

        });
    }

     /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-salon-slider').length) {
        $('#tnit-salon-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'pulse',
            mouseDrag: false,

        });
    }

    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-food-slider').length) {
        $('#tnit-food-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            mouseDrag: false,

        });
    }


    /*
    Owl Slide For Banner Vertical*/
    if ($('#tnit-creativity-banner').length) {
        $('#tnit-creativity-banner').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 7000,
            mouseDrag: false,

        });
    }

    /*
    Owl Slide For Shoes Banner*/
    if ($('#tnit-shoes-slider').length) {
        $('#tnit-shoes-slider').owlCarousel({
            loop: false,
            dots: true,
            nav: true,
            navText: '',
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 7000,
            animateOut: 'fadeOut',
            animateIn: 'pulse',
            // touchDrag: false,
            mouseDrag: false,

        });
    }


    /*
    Animated Move Text JQuery code*/
    if ($('.tnit-anim-move').length) {
        $('.tnit-anim-move').tilt({
            maxTilt:        20,
            perspective:    3000,   // Transform perspective, the lower the more extreme the tilt gets.
            easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
            speed:          500,    // Speed of the enter/exit transition.
            transition:     true,   // Set a transition on enter/exit.
            disableAxis:    null,   // What axis should be disabled. Can be X or Y.
            reset:          true,   // If the tilt effect has to be reset on exit.
            glare:          false,  // Enables glare effect
            maxGlare:       1,      // From 0 - 1.
           
        });
    }


     /*
    vertical Slider window height JQuery code*/
    $(window).on('load resize', function () {
      var w = $(window).width();
      $("#tnit-vertical-slider")
        .css('max-height', w > 1441 ? 940 : w > 1280 ? 768 : w > 480 ? 615 : 715);
    });

     
    /*
    Mousehover 3d move JQuery code*/
    $('.tnit-movement-box_v2').plate({
      // inverse animation
      inverse: false,
      // transformation perspective in pixels
      perspective: 1000,
      // maximum rotation in degrees
      maxRotation: 2,
      // duration in milliseconds
      animationDuration: 500

    });

     /*
    Movement Box JQuery code*/
    $('.tnit-movement-box').plate({
      // inverse animation
      inverse: true,
      // transformation perspective in pixels
      perspective: 700,
      // maximum rotation in degrees
      maxRotation: 3,
      // duration in milliseconds
      animationDuration: 700

    });



    /*
    Animated Move Text JQuery code*/
    if ($('.tnit-animate-text').length) {
        $('.tnit-animate-text').typer({
          typeSpeed: 60,
          backspaceSpeed: 20,
          backspaceDelay: 800,
          repeatDelay: 1000,
          repeat: true,
          autoStart: true,
          startDelay: 100,
        });
    }

    
    /*
    Typer Text JQuery code*/
    if ($('.tnit-type-text').length) {
        $(".tnit-type-text").typer({
            strings: [
                "Creative Team",
                "Professional Designers",
                "UI & UX Designers",
            ],
            typeSpeed: 300,
            backspaceSpeed: 20,
            backspaceDelay: 1500,
            repeatDelay: 1000,
            repeat: true,
            autoStart: true,
            startDelay: 700,

        });
    }

    /*
    Add Splitting Text JQuery code*/
    if ($('.tnit-type-text').length) {

    }


     /*
    Splitting JQuery code*/

    const results = Splitting({
      target: '.tnit-splitting',
      by: 'grid',
      matching: '.col'
    });

    Splitting();




});








