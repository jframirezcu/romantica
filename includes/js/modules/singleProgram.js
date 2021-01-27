
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
* Funcion que remueve el contenido del modal y quita el evento
*
* @param {object} e Elemento del evento
*/
const handleClickCloseModal = (e) =>{
	const modalContent = document.querySelector('.js-modal__content');
	if(!modalContent)
		return;

	modalContent.innerHTML = '';

	//quitamos evento para evitar duplicidad del evento al abrir nuevamente el modal
	e.currentTarget.removeEventListener('click', handleClickCloseModal);

}


/**
* Declara el evento click, cuando se quiere cerrar el modal
*/
const closeBgModal = () => {

	const clickBgCloseModal = document.querySelector('#showsModal.show');
	if(!clickBgCloseModal)
		return;

	clickBgCloseModal.addEventListener('click', handleClickCloseModal);
}

/**
* Inicializa los enlaces que abren el modal, carga la url de la cancion
*/
const initModal = () =>{
	
	const modals = document.querySelectorAll('a.js-single-program__song');
	if(modals.length===0)
		return;

	modals.forEach((element, i)=>{
		element.addEventListener('click', (e)=>{
			const link         = e.currentTarget;
			const modalContent = document.querySelector('.js-modal__content');
			if(!modalContent)
				return;

			modalContent.innerHTML = iframeTemplate(link.href);
			setTimeout(closeBgModal, 500);
		});
	});

	// const btnClose = document.querySelector('.js-modal__close');
	// btnClose.addEventListener('click', handleClickCloseModal );

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