
jQuery(document).ready(function() {
    $(".song-wrap").click(function() {
        $(".icon-play", this).hide();
        $(".icon-pause", this).show();
    });
    $(".input-group-prepend").click(function() {
        $(this).siblings().toggle().css("display", "width");
    });
    $('#second-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#third-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    

    $('#single-news-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            850:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.carousel').carousel({
        interval: false
    });
    if (window.screen.width >= 768) {
        $( window ).scroll(function() {
            if ($(window).scrollTop() !== 0) {
                $( ".fixed-dropdown" ).fadeIn();
                $( ".scroll-none" ).fadeOut();
            }
            else {
                $( ".fixed-dropdown" ).fadeOut();
                $( ".scroll-none" ).fadeIn();
            }
        });
    }
});