jQuery(document).ready(function() {
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
    $('.carousel').carousel({
        interval: false
    })
});