import { moviesAPI } from '../api/api'

const SET_MOVIES = 'SET_MOVIES';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	movies: [],
	isLoading: false
};

const moviesReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_MOVIES:
			return { 
				...state, 
				movies: [...action.movies]
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			}
		default: 
			return state;
	}
}

export const setMovies = (movies) => ({type: SET_MOVIES, movies: movies});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getPopular = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		moviesAPI.getPopular()
		.then(data => {
			dispatch(setMovies(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getNowPlaying = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		moviesAPI.getNowPlaying()
		.then(data => {
			dispatch(setMovies(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getUpcoming = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		moviesAPI.getUpcoming()
		.then(data => {
			dispatch(setMovies(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getTopRated = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		moviesAPI.getTopRated()
		.then(data => {
			dispatch(setMovies(data));
			dispatch(toggleIsLoading(false));
		});
	}
};


export default moviesReducer;