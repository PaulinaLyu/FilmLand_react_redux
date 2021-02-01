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
	}
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

export const tvAPI = {
	getPopular () {
		return instance.get(`tv/popular?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getAiringToday () {
		return instance.get(`tv/airing_today?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getOnTv () {
		return instance.get(`tv/on_the_air?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	},
	getTopRated() {
		return instance.get(`tv/top_rated?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	}
};

export const peopleAPI = {
	getPopular () {
		return instance.get(`person/popular?api_key=93f9bc4e7b4acda0fc30a502693f4ea2`)
		.then(response => {
			return response.data.results;
		})
	}
};