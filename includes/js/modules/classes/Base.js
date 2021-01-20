import Utils from './Utils';

import * as staticSite from '../staticSite';

const _utils = new Utils();


class Base {
    constructor() {

        this._initSearchForm();
        this.setListenerButtonShare();
        this.fixedDropdown();
        // this.changePlayPause();
        this.inputSearchToggleDisplay();

    }

    

    /**
    * Evento para los botones compartir
    */
    setListenerButtonShare = () => {
        //evento para los enlaces de compartir en redes sociales
        $(document).on('click', '[data-share-network]', function(e){
            e.preventDefault();
            _utils._openWindow( $(this).attr('href'), 500, 500);
        });
    }

    /**
    * formulario del buscador
    */
    _initSearchForm = () => {
        
        $('.js-form-search input[name="search"]').on("keydown", event => {
            if (event.keyCode === 13) {
                let search    = $(event.target).val();
                search        = _utils.sanitizeString(search);
                // location.href = global_domain+'/search/'+search+'/';
                staticSite.setUrlStatic(global_domain+'/search/'+search+'/');
                return;
            }
        });
    }


    /**
    * segun el scroll, deja el menu en fixed o no
    */
    fixedDropdown = () =>{
        if (window.screen.width >= 768) {
            $( window ).scroll(function() {
                if ($('html,body').scrollTop() > 0) {
                    $( ".fixed-dropdown" ).fadeIn();
                    $( ".scroll-none" ).addClass("hide");
                }
                else {
                    $( ".fixed-dropdown" ).fadeOut();
                    $( ".scroll-none" ).removeClass("hide");
                }
            });
        }
    }

    
    /**
    * Evento para mostrar el play o pausa en ciertos botones
    */
    changePlayPause = () =>{
        $(".song-wrap").click(function() {
            $(".icon-play", this).hide();
            $(".icon-pause", this).show();
        });
    }


    /**
    * Muestra u oculta el input de busqueda del header
    */
    inputSearchToggleDisplay = () => {
        $(".input-group-prepend").click(function() {
            $(this).siblings().toggle().css("display", "width");
        });
    }

}

export default Base;