import Single from './classes/Single';
import Rudo from './classes/Rudo';

const _single = new Single();
const _rudo   = new Rudo();

const loadSingleFunctions = () =>{
	
	_single._initSingleRelatedNotes();
	_single.carouselSingleNoticiasRelacionadas();


	//carga el iframe de rudo en el single
	_rudo.loadIframe(false);

}

$(function(){

	loadSingleFunctions();

});


export {
	loadSingleFunctions
}