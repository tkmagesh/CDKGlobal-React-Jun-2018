import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { spinnerReducer } from '../reducers/spinnerReducer';
import { bugsReducer } from '../reducers/bugsReducer';
import { errorReducer } from '../reducers/errorReducer';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer,
	errorData : errorReducer
});
let appStore = createStore(rootReducer, applyMiddleware(thunk));
export default appStore;