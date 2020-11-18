class Rudo {
	constructor(){
		this.class_element   = '.js_rudo_video';
		this.handlebars_id   = '#embed-rudo-template';
		this.container_class = '.main-single__text';
		this.default_width   = 360;
		this.podcast_height  = 360;
	}


	/**
	* Retorna los elementos de rudo que no han sido cargados aun
	*
	* @return {object} Elemento html
	*/
	getElements = () =>{
		const $element = $(`${this.class_element}:not(.loaded)`);//solo los elementos que no tienen el iframe cargado
		if( $element.length==0)
            return false;
        
        return $element;
	}


	/**
	* Permite asignar la clase del elemento padre al div que contiene los elementos de rudo
	*
	* @param {string} class_name Nombre de la clase con punto ej: .clase_contenedor
	*/
	setContainerClass = (class_name='') =>{
		if(class_name=='') return;
		this.container_class = class_name;
	}


	/**
	* Retorna el ancho del contenedor padre o el por defecto en caso de no encontrar uno
	*
	* @return {int}
	*/
	getWidthContainer = () => {
		if( this.container_class=='' ) 
			return this.default_width;

		const $element = $(this.container_class);
		if($element.length==0) 
			return this.default_width;

		//retornamos el ancho del primer contenedor, ya que, de repetirse todos los contenedores tendrian el mismo ancho
		return parseInt($element.eq(0).width());
	}


	/**
	* Permite asignar el id del template handlebar que se va a utilizar
	*
	* @param {string} id Id del handlebars script
	*/
	setHandlebarsTemplateId = (id=false) => {
		if(!id) return false;
		this.handlebars_id = id;
	}


	/**
	* Retorna el template handlebar
	*
	* @return {Handlebars} Plantilla
	*/
	getHandlebarsTemplate = () => {
		const $element = $(this.handlebars_id);
		if(!$element[0]){
			console.log('Template handlebars no creado');
			return false;
		}
		const source = $element.html();
		return Handlebars.compile(source);
	}


	/**
	* Retorna la url de rudo con los parametros de cada video/podcast
	*
	* @param {string} type Tipo de iframe (vod|podcast)
	* @param {string} key Identificador del video/audio
	* @param {bool} autostart Indica si se debe reproducir o no al cargar el iframe
	* @param {string} ikey Codigo en base64 del nombre de la imagen para ser usado en el iframe de rudo
	*
	* @return {string} Url del iframe
	*/
	createUrlRudo = (type='vod', key='', autostart=false, ikey='') => {
		let url_autostart = '?autostart=false';
		type              = type.toLowerCase();
		if(autostart === true) url_autostart = '?autostart=true';

		if(ikey!='')
            return global_rudo_url+'/'+type+'/'+key+'/skin/simple/i/'+ikey+url_autostart;

		return global_rudo_url+'/'+type+'/'+key+url_autostart;
	}


	/**
	* Limpia los atributos data del elemento
	*
	*/
	clearDataAttrs = ($element) => {
		// $element.data('rudo', '');
  		// element.attr('data-rudo', '');

        $element.data('ikey', '');
        $element.attr('data-ikey', '');
	}


	/**
	* Permite asignar una altura para los iframe de tipo podcast
	*
	* @param {int|bool} height Altura del iframe, debe ser superior a 100px
	*/
	setPodcastHeight = (height=false) =>{
		if(!height || parseInt(height)<100) return;
		this.podcast_height = parseInt(height);
	}


	/**
	* Retorna la altura del iframe segun el tipo
	*
	* @param {string} type Tipo de iframe (vod|podcast)
	*
	* @return {int} altura del iframe
	*/
	getHeight = (type='vod') => {
		if(type.toLowerCase()=='podcast')
			return this.podcast_height;

		let ancho = this.getWidthContainer();
		return parseInt(ancho/16) * 9;
	}

	/**
	* Retorna el tipo de iframe a crear
	*
	* @param {string} type Tipo de archivo (audio|video|podcast)
	*
	* @return {string} tipo de iframe (vod|podcast)
	*/
	getTypeIframe = (type='video') => {
		if(type.toLowerCase()=='podcast')
			return 'podcast';

		return 'vod';
	}


	/**
	* Crea el iframe de rudo
	*
	* @param {bool} autostart Indica si se debe reproducir o no al cargar el iframe
	*/
	loadIframe = (autostart=false) => {
		try{
			const template      = this.getHandlebarsTemplate();
			const $rudoElements = this.getElements();
			const _rudo         = this;
			if(!template || !$rudoElements || typeof global_rudo_url=='undefined' ) return false;


			$.each( $rudoElements, function(r, item){
	            if( $(item).html() ){
	                $(item).addClass('loaded');
	                // asigna
	                let $element    = $(item);
	                let dps_rudo    = $element.html();
	                dps_rudo        = JSON.parse(dps_rudo);
	                let ikey        = $element.data('ikey');
	                let ancho       = _rudo.getWidthContainer();
	                let type_video;
	                $element.empty();

	                // valida si existe el objeto
	                if( typeof dps_rudo.videos!='undefined' && dps_rudo.videos.length>0 ){

		                // recorre el objeto
		                for (var i = 0; i < dps_rudo.videos.length; i++) {
		                	// asigna el vod/podcast y la altura segun el tipo
							var rudo = dps_rudo.videos[i];
							let type = _rudo.getTypeIframe(rudo.type);
							let alto = _rudo.getHeight(type);

		                    // asigna los datos al template y agrega el html resultante en el DOM del single
		                    var embed = template({
		                        url     : _rudo.createUrlRudo(type, rudo.key, autostart, ikey),
		                        width   : ancho,
		                        height  : alto
		                    });
		                    $element.append( embed );
		                };

		                //muestra el elemento contenedor del iframe
	                	$element.show();
	                }

	                // borra los data
	                _rudo.clearDataAttrs($element);
	            }
	        });
		}
		catch(e){
			console.log('Error', e);
		}
	}
}

export default Rudo;

