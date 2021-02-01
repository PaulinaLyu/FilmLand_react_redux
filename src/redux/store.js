import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import homeReducer from './homeReducer';
import moviesReducer from './moviesReducer';
import tvReducer from './tvReducer';
import peopleReducer from './peopleReducer';
import authReducer from './authReducer';

let reducers = combineReducers ({
	homePage: homeReducer,
	moviesPage: moviesReducer,
	tvPage: tvReducer,
	peoplePage: peopleReducer,
	auth: authReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;