jQuery(document).ready(function() {
    $('.owl-carousel').owlCarousel({
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
    })
    $('.carousel').carousel({
        interval: false
    })
});