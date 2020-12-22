
class Utils {
    constructor() {
        
    }




    /*
        agrega el div contenedor con la clase responsiva en los elementos pasados a la funcion
        params:
            (string) n elementos separados por coma, ejemplo: 'iframe[src*="rudo"]', 'iframe[src*="youtube"]', 'iframe[src*="vimeo"]', 'video', 'audio', 'iframe[src*=docdroid]'
        return (void)
    */
    _setResponsiveVideo = function() {
        var toResponsive  = Array.prototype.join.call(arguments);
        var $toResponsive = $(toResponsive);

        $.each($toResponsive, function(i, el) {
            var $element = $(el);
            var $parent  = $element.parent();

            if (!$parent.hasClass('responsive-video') && !$element.hasClass('no-responsive-video'))
                $element.wrap('<div class="responsive-video"></div>');
        });
    };


    /*
        abre una nueva ventana con la url pasada a la funcion
        params:
            url (string) url que se desea abrir
            winHeight (int) alto de la ventana
            winWidth (int) ancho de la ventana
        return (void)
    */
    _openWindow = function(url, winHeight, winWidth ) {
        var winTop = (screen.height / 2) - (winHeight / 2);
        var winLeft = (screen.width / 2) - (winWidth / 2);
        window.open( url, 'sharer', 'height='+winHeight+', width='+winWidth+', top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    }





    /**
    * Limpia un string para poder enviarlo por url
    *
    * @param {string} str String que se quiere sanitizar
    *
    * @return {string} cadena sanitizada
    */
    sanitizeString = (str)=>{
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return str;
    }
    

    /**
    * Retorna la url de la pagina a cargar (nota a la que se le hizo click)
    *
    * @param {string} string Url a la que se le hizo click en el sitio
    *
    * @return {string|bool} url para cargar en el sitio o false en caso de error
    */
    returnUrlStatic = (string='') => {
        try{
            if(!string || string==='#' || string[0]==='#' || typeof global_domain==='undefined' || global_domain=='')
                return false;

            let url        = new URL( string, global_domain || '' );
            let url_domain = new URL( global_domain );
            if( url_domain.host!=url.host )
                return false;

            return url.href;
        }
        catch(e){
            return false;
        }
    }

    /**
    * Verifica si la url a analizar es del sitio o no, necesita la variable global "global_domain" para realize la comprobacion, si no solo retornara "falso".
    *
    * @param {string} url Url del enlace a verificar
    *
    * @return {bool} true si la url es la misma del sitio, falso si la url no es del sitio
    */
    urlIsFromTheSite = (url=false) => {
        try{
            if(!url || url==='#' || url[0]==='#' || typeof global_domain==='undefined' || global_domain=='')
                return false;

            url            = new URL( url, global_domain || '' );
            let url_domain = new URL( global_domain );
            if( url_domain.host!=url.host )
                return false;
            return true;
        }
        catch(e){
            return false;
        }
    }

}

export default Utils;