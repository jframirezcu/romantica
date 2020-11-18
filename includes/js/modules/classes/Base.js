import Utils from './Utils'
const _utils = new Utils();


class Base {
    constructor() {

        this._initSearchForm();
        this.setListenerButtonShare();
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
                location.href = global_domain+'/search/'+encodeURI(search)+'/';
                return;
            }
        });
    }

}

export default Base;