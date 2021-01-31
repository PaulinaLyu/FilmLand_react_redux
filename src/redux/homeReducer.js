import { homeAPI } from '../api/api'

const SET_TRENDING = 'SET-TRENDING';

let initialState = {
	trending: [],
};

const homeReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_TRENDING:
			return { 
				...state, 
				trending: [...action.trending]
			}
		default: 
			return state;
	}
}

export const setTrending = (trending) => ({type: SET_TRENDING, trending: trending});

export const getTrending = () => {
	return (dispatch) => {
		
		homeAPI.getTrending()
		.then(data => {
			dispatch(setTrending(data));
		});
	
	}
};

export default homeReducer;