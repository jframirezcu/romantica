import Single from './classes/Single';
import Rudo from './classes/Rudo';

const _single = new Single();
const _rudo   = new Rudo();


$(function(){

	_single._initSingleRelatedNotes();


	//carga el iframe de rudo en el single
	_rudo.loadIframe(false);

});