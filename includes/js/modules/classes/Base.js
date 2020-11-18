import Utils from './Utils'
const _utils = new Utils();


class Base {
    constructor() {

        this._initSearchForm();
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