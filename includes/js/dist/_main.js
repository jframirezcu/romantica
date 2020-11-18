var now = function(data){
	
    if(typeof data.items!=='object' || data.items.length==0){
    	return false;
    }

    playerNowSong(data.items[0]);
}
var last = function(data){
	
    if(typeof data.items!=='object' || data.items.length==0){
    	return false;
    }

    playerLastSong(data.items);
}

var playerNowSong = function(song){
	var $title    = $('.js-now-player__title');
	var $subtitle = $('.js-now-player__subtitle');

	$title.html( song.artist );
	$subtitle.html( song.song );
}

var playerLastSong = function(songs){
	
	var $element = $('#last-songs-template');
	if(!$element[0]) return;

	const source = $element.html();
	var template = Handlebars.compile(source);

	var items = [];
	for (var i = 0; i < songs.length && i<4; i++) {
		var song      = songs[i];
		var image     = global_placeholder;
		var tmp_title = song.song.split('|', 2);

		//en caso de dividir la cadena
		if(tmp_title.length==2){
			song.artist = tmp_title[0].trim();
			song.song   = tmp_title[1].trim();
		}
		else{
			song.artist = song.song;
			song.song   = '';
		}

		if( typeof song.imgsong==='string' && song.imgsong!=='' && song.imgsong!=='default' )
			image = song.imgsong;

		song.image = image;
		items.push(song);
	}
	if(items.length==0)
		items = false;

	$('.js-content-player-last__content-song').html(template({items : items}));
}