import { profileAPI } from '../api/api'

const SET_PROFILE = 'SET_PROFILE';
const SET_SIMILARS = 'SET_SIMILARS';

let initialState = {
	profile: {},
	similars: []
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_SIMILARS:
			return {
				...state,
				similars: action.similars
			}
		default:
			return state;
	}
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile});
export const setSimilars = (similars) => ({type: SET_SIMILARS, similars});

export const getProfile = (id, category) => {
	return (dispatch) => {
		profileAPI.getProfile(id, category)
		.then(data => {
			dispatch(setProfile(data));
		});
	}
};

export const getSimilars = (id, category) => {
	return (dispatch) => {
		profileAPI.getSimilars(id, category)
		.then(data => {
			dispatch(setSimilars(data));
		});
	}
};

export default profileReducer;