import { peopleAPI } from '../api/api'

const SET_PEOPLE = 'SET_PEOPLE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	people: [],
	isLoading: false
};

const peopleReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_PEOPLE:
			return { 
				...state, 
				people: [...action.people]
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

export const setPeople = (people) => ({type: SET_PEOPLE, people: people});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getPopular = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));

		peopleAPI.getPopular()
		.then(data => {
			dispatch(setPeople(data));
			dispatch(toggleIsLoading(false));
		});
	}
};

export default peopleReducer;