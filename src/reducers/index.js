import { combineReducers } from 'redux';
import task from './task';
import loading from './loading';
import modal from './modal';
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
		task,
		loading,
		modal,
		form: formReducer
});

export default rootReducers;