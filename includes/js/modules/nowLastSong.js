import Api from './classes/Api';
const _api = new Api();

$(function(){

	_api.requestSongJsonp(global_url_romantica_now);
	_api.requestSongJsonp(global_url_romantica_last);

});
