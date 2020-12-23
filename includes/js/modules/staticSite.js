//clases
import Utils from './classes/Utils';

//modulos
import * as single from './single';
import * as home from './home';
import * as googleAnalytics from './googleAnalytics';

//asignaciones
const _utils = new Utils;


/**
* Carga la url pasada a la funcion e imprime el contenido en la misma pagina.
*
* @param {string} url Url de la pagina a cargar del sitio.
*
* @return {void}
*/
const loadContentStatic = (url=false) => {
	if(!url){
		console.log('Url no válida');
		return;
	}

	fetch(url)
	.then( response => {
		return response.text()
	})
	.then( html =>{
		//parsea el html retornado y asigna los valores que necesita
		let parser    = new DOMParser();
		let dom       = parser.parseFromString(html, "text/html");
		let headTitle = dom.title;
		let content   = dom.querySelector('.js-content-static') ? dom.querySelector('.js-content-static').innerHTML : '';
		let path_mega = dom.querySelector('#js-mega-script') ? dom.querySelector('#js-mega-script').dataset.path : '';
		let src_style = dom.querySelector('#js-style-site') ? dom.querySelector('#js-style-site').href : '';
		
		//si no hay contenido, retorna sin hacer nada
		if(!content)
			return;

		//asigna los datos nuevos a la pagina actual
		document.title                                         = headTitle;
		document.querySelector('.js-content-static').innerHTML = content;
		
		if(path_mega!=='')
			document.querySelector('#js-mega-script').dataset.path = path_mega;
		if(src_style!=='')
			document.querySelector('#js-style-site').href = src_style;

		//cambia la url actual por la nueva y agrega la entrada en el historial
		history.pushState({article : url}, headTitle, url);

		//desplaza al top del sitio
		slideTop();

		try{
			//se re-inicializan funcionalidades del sitio
			setTimeout(()=>{
				loadAds(); // carga la publicidad
				single.loadSingleFunctions(); // inicializa las funciones del single
				home.loadHomeFunctions();
				initEventAjax('.js-content-static .js-link-static a'); // inicializa los nuevos enlaces cargados
				googleAnalytics.sendViewGA(); //envia el pageview de la nueva pagina
			},100);
		}
		catch(e){};

	})
	.catch( error => {
		console.error('Error: ', error);
	});
}



/**
* Carga/recarga la publicidad del sitio
*/
const loadAds = () =>{
	if(typeof dfp!=='object')
		return;

	dfp.lazyLoadBlockDivs();
}


/**
* Desplaza la pagina al inicio de esta.
*/
const slideTop = () =>{
	window.scrollTo(0, 0);
}


/**
* Inicializa el evento click sobre los enlaces que cumplan la regla.
*
* Esto lo que hara sera verificar el enlace y si este pertenece al sitio, 
* le asignara el evento el cual permite la carga del contenido de la url en la misma pagina en la que se encuentra
*
* @param {string} element_text Elementos a los cuales se le quiere aplicar el evento. Puede ser una clase en particular, 
								un id sobre un enlace. La idea es que se haga referencia a un enlace y pueda ser recuperado con "querySelectorAll".
*
* @return {void}
*/
const initEventAjax = ( element_text = '') => {
	if(element_text=='' )
		return;

	document.querySelectorAll( element_text ).forEach(enlaces => {

			if(enlaces.dataset.hasEventStatic)
				return;

			// if(!_utils.urlIsFromTheSite(enlaces.href))
			// 	return;
			if(!_utils.urlIsFromTheSite(enlaces.getAttribute('href')))
				return;

			enlaces.dataset.hasEventStatic = 1;
			enlaces.addEventListener('click', (e)=>{

				let url = e.currentTarget.href;
				url     = _utils.returnUrlStatic(url);
				if(url===false)
					return;

				e.preventDefault();
				loadContentStatic(url);
			});
	});
}

/**
* Llama a la funcion que inicializa el evento sobre los enlaces que cumplen la regla.
*/
const startEventAjax = () =>{
	initEventAjax( '.js-link-static a' );
}



startEventAjax();


//exporta funciones
export {
	startEventAjax
}
