const sendViewGA = (data={}) =>{

    if( typeof ga!=='function' ) return false;

    let page_location = location.href;
    let page_path     = location.pathname;
    if(typeof data=='object' ){
        if(typeof data.page_location=='string' && data.page_location!='' )
            page_location = data.page_location;
        if(typeof data.page_path=='string' && data.page_path!='' )
            page_path = data.page_path;
    }
	
	ga('set', 'location', page_location);
    ga('set', 'page', page_path);
    ga('send','pageview');
    
}


export {
	sendViewGA
}