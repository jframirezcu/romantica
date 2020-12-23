class Home {
    constructor() {

    }

    sliderTop = () => {
        
        if( !$('.carousel')[0] ) return;
        
        $('.carousel').carousel({
            interval: false
        }); 
    }

    /**
    * Inicializa carrucel del bloque los culpables de siempre
    */
    carouselCulpablesDeSiempre = () => {

        if(!$('#second-slider')[0]) return;

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
    }


    /**
    * Inicializa carrucel de mas noticias
    */
    carouselMasNoticias = () =>{
        
        if(!$('#third-slider')[0]) return;

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
    }

}

export default Home;