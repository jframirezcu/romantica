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
    /*// check if the nav is "open"
    var open = !$('#nav-dropdown').hasClass('shown');

    // for simplicity, always first remove the nav-open from the body
    $('#nav-open-bg').removeClass('nav-open');
    // if the nav is open, add the 'nav-open' class to the body
    if (open) {
        $('#nav-open-bg').addClass('nav-open');
    }*/
});