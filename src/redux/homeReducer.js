import { homeAPI } from '../api/api'

const SET_TRENDING = 'SET_TRENDING';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	trending: [],
	isLoading: false
};

const homeReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_TRENDING:
			return { 
				...state, 
				trending: [...action.trending]
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

export const setTrending = (trending) => ({type: SET_TRENDING, trending: trending});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getTrending = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));
		homeAPI.getTrending()
		.then(data => {
			dispatch(setTrending(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export default homeReducer;