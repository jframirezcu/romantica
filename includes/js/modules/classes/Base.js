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

        $('.js-form-search').on('submit', (e)=>{
            e.preventDefault();
            var search    = $(e.target).find('input[name="search"]').val();
            search        = _utils.sanitizeString(search);
            location.href = global_domain+'/search/'+encodeURI(search)+'/';
        });
    }

}

export default Base;