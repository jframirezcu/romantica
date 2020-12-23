//clases
import Api from './classes/Api';
import Utils from './classes/Utils';

//declaraciones/asignaciones
const _api = new Api;

/**
* Agrega la canción actual en el player del home
*
* @param object song Cancion actual.
*/
const printNowData = (song) =>{

	let $title    = document.querySelector('.js-now-player__title');
	let $subtitle = document.querySelector('.js-now-player__subtitle');

	if(!$title) return;

	$title.innerHTML = song.name;

	if( typeof song.artist==='object' )
		$subtitle.innerHTML = song.artist.name || song.name;
}

/**
* Agrega las ultimas canciones en el contenedor
*
* @param object songs Listado de canciones.
*/
const printLastData = (songs) =>{
	let $element = document.querySelector('#last-songs-template');
	if(!$element || !document.querySelector('.js-content-player-last__content-song')) 
		return;

	const source = $element.innerHTML;
	let template = Handlebars.compile(source);

	let items = [];
	let limit = 4;
	if(songs.length<4)
		limit = songs.length-1;

	for (let i = 0; i < limit; i++) {
		let song  = songs[i];
		let image = global_placeholder;

		if( typeof song.artist!=='object' )
			song.artist.name = song.name;

		if( typeof song.images==='object' && song.images.small!=='' )
			image = song.images.small || global_placeholder;
		song.image = image;
		items.push(song);
	}
	if(items.length==0)
		items = false;

	$('.js-content-player-last__content-song').html( template({items : items}) );
}


/**
* Realiza peticion para obtener la ultima canción de la radio.
*
* Esta peticion se repetira cada x segundos
*/
const nowSong = () => {

    _api.request(global_url_romantica_now)
        .then( data => {
            printNowData(data)
        })
        .catch( e =>{
            console.log('Error al cargar now data 2', e);
        });

    // llamamos nuevamente a la funcion a los x segundos (esto se repetira en el sitio)
    setTimeout(function(){
        nowSong();
    },50000);

}


/**
* Realiza peticion para obtener el listado de las ultimas canciones de la radio.
*/
const lastSong = () => {

    _api.request(global_url_romantica_last)
        .then( data => {
            printLastData(data);
        })
        .catch( e =>{
            console.log('Error al cargar last data');
        });
}



//carga la canción actual
nowSong();
//ultimas canciones
lastSong();

export {
	nowSong,
	lastSong
}