import Home from './classes/Home';
const _home = new Home;

const loadHomeFunctions = () => {
	_home.sliderTop();
	_home.carouselCulpablesDeSiempre();
	_home.carouselMasNoticias();
}


loadHomeFunctions();



export {
	loadHomeFunctions
}