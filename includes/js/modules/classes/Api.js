class Api {
    constructor() {
        this.dataType = 'json';
    }

    isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    setDataType(dataType='json'){
        this.dataType = dataType;
    }

    request(endpoint='', method = 'GET', data={}){
        
        return new Promise((resolve, reject)=>{
            var ajaxConfig = {
                method   : method,
                url      : endpoint,
                data     : data,
                dataType : this.dataType,
                cache    : false,
                success  : function(response){
                    resolve(response);
                },
                error : function(){
                    reject({status: 'error',msg: 'Error en el servidor, por favor inténtelo de nuevo más tarde.'});
                }
            };
            if( (data instanceof FormData)==true ){
                ajaxConfig.contentType = false;
                ajaxConfig.processData = false;
            }

            $.ajax(ajaxConfig);
        });


    }

    requestSongJsonp( endpoint='' ){
        
        if(endpoint=='') return;

        var ajaxConfig = {
            method   : 'GET',
            url      : endpoint,
            dataType : 'jsonp',
            cache    : false,
        };
        $.ajax(ajaxConfig);


        // llamamos nuevamente a la funcion a los x segundos (esto se repetira en el sitio)
        setTimeout(function(){
            new Api().requestSongJsonp(endpoint);
        },50000);
    }

    requestLastSongJsonp( endpoint='' ){
        
        if(endpoint=='') return;

        var ajaxConfig = {
            method   : 'GET',
            url      : endpoint,
            dataType : 'jsonp',
            cache    : false,
        };
        $.ajax(ajaxConfig);
    }
}

export default Api;