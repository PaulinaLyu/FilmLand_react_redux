import { tvAPI } from '../api/api'

const SET_TV = 'SET_TV';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	tv: [],
	isLoading: false
};

const tvReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_TV:
			return { 
				...state, 
				tv: [...action.tv]
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

export const setTv = (tv) => ({type: SET_TV, tv: tv});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getPopular = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		tvAPI.getPopular()
		.then(data => {
			dispatch(setTv(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getAiringToday = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		tvAPI.getAiringToday()
		.then(data => {
			dispatch(setTv(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getOnTv = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		tvAPI.getOnTv()
		.then(data => {
			dispatch(setTv(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getTopRated = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		tvAPI.getTopRated()
		.then(data => {
			dispatch(setTv(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export default tvReducer;