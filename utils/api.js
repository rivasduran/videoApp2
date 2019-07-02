const BASE_API = 'https://yts.am/api/v2/';

class Api {
	//FUNCIONES ASINCRONAS
	async getSuggestion(id) {
		//HACEMOS UNA QUERY PARA ESPERAR UNA PETICION
		//UZAREMOS FETCH QUE ES UNA PETICION DE PROMESAS
		//EL USO DE `` ES UN TEMPLATE TEXT
		const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
		//const data = await query.json();
		//console.log(data);
		//return data;

		const { data } = await query.json();//ESTO ES PARA SOLO TRAER DATA
		//console.log(data);
		return data.movies;		
	}

	async getMovies() {
		//HACEMOS UNA QUERY PARA ESPERAR UNA PETICION
		//UZAREMOS FETCH QUE ES UNA PETICION DE PROMESAS
		//EL USO DE `` ES UN TEMPLATE TEXT
		const query = await fetch(`${BASE_API}list_movies.json`);
		const { data } = await query.json();//ESTO ES PARA SOLO TRAER DATA
		//console.log(data);
		return data.movies;		
	}
}

export default new Api();