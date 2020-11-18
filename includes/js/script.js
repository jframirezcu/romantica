function initSingleNewsSlider(){
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
}
jQuery(document).ready(function() {
    $(".song-wrap").click(function() {
        $(".icon-play", this).hide();
        $(".icon-pause", this).show();
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
    })
    initSingleNewsSlider();
    $('.carousel').carousel({
        interval: false
    })
});