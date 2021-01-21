
/**
* Template del iframe que se cargara en el modal
*/
const iframeTemplate = (url) =>{
	return `<div class="responsive-video">
                <iframe
                    class="vrudo"
                    src="${url}"
                    width="100%"
                    height="320"
                    allowscriptaccess="always"
                    allowfullscreen="true"
                    webkitallowfullscreen="true"
                    frameborder="0"
                    scrolling="no"
                    allow="autoplay" >
                </iframe>
            </div>`;
}

/**
* Inicializa los enlaces que abren el modal, carga la url de la cancion
*/
const initModal = () =>{
	
	const modals = document.querySelectorAll('a.js-single-program__song');
	if(modals.length===0)
		return;

	modals.forEach((element, i)=>{
		element.onclick = (e)=>{
			const link         = e.currentTarget;
			const modalContent = document.querySelector('.js-modal__content');
			if(!modalContent)
				return;

			modalContent.innerHTML = iframeTemplate(link.href);

		};
	});

}


/**
* Inicializa las funcionalidades de la sección
*/
const initSingleProgramFunctions = () =>{
	
	initModal();

}


/**
* Evento al cargar la pagina completa (html, imagenes, iframes, etc)
*/
window.onload = ()=>{

	initSingleProgramFunctions();

}


//EXPORTA FUNCION
export {
	initSingleProgramFunctions
}