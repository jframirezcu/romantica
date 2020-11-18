
class Single {
    constructor() {
        
    }


    /*
        Carga los tags del single de la pagina
        params (void)
        return (void)
    */
    _loadTags = () => {

        if( !$('[data-post-tag]')[0] ) return;

        $.each( $('[data-post-tag]'), function(t, item_tag){
            // asigna y valida si tiene datos
            let tags = $(item_tag).data('tags');
            if( typeof tags==='object' && tags!='' ){

                // limpia los tags del atributo data
                $(item_tag).data('tags', '');
                $(item_tag).attr('data-tags', '');

                // recorre los tags y agrega
                $.each( tags, function(i, item){
                    $(item_tag).append(`<a href="/tag/${item.slug}/" class="">${item.name}</a>`);
                });
            }
        });
        
    }


    /*
        Carga el html de los relacionados del post
        params (void)
        return (void)
    */
    _initSingleRelatedNotes = () => {

        const $relations = $('.js-single-relations:not(.loaded)');
        if( !$relations[0] ) return;

        try{

            $relations.each(function(i,item){

                let $this = $(item);
                let type  = $this.data('type');
                let valid = true;
                if( typeof $this.text()!='string' || $this.text()=='' )
                    valid = false;
                
                if( typeof type!='string' || $this.text()=='' ) 
                    valid = false;

                if( valid && $(`#single-relations-${type}-template`)[0]){

                    let data = $this.text();
                    data     = JSON.parse( data.trim() );
                    $this.empty();

                    if(data.length===0)
                        data = false;
                
                    let source   = $(`#single-relations-${type}-template`).html();
                    let template = Handlebars.compile(source);
                    let $html    = template({
                        relations   : data,
                        domain      : global_domain,
                        domain_image: global_domain_image,
                        placeholder : global_placeholder
                    });
                    $this
                        .html($html)
                        .show()
                        .addClass('loaded');

                    //inicializa owl carousel
                    initSingleNewsSlider();
                }
                else{
                    $this
                        .empty()
                        .addClass('loaded');
                }


            });
            

        }catch(error){
            $relations.empty().hide();
        }

    }

}

export default Single;