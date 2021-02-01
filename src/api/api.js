import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const homeAPI = {
	getTrending () {
		return instance.get(`trending/all/day?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
};

export const moviesAPI = {
	getPopular () {
		return instance.get(`movie/popular?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getNowPlaying () {
		return instance.get(`movie/now_playing?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getUpcoming () {
		return instance.get(`movie/upcoming?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getTopRated() {
		return instance.get(`movie/top_rated?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	}
};