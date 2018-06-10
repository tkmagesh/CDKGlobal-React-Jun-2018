import * as bugServer from '../services/bugServer';

export function load(bugName){
	return function(dispatch){
		bugServer
			.load()
			.then(bugs => dispatch({ type : 'LOAD', payload : bugs}))
			.catch(err => {
				dispatch({ type : 'SHOW_ERROR', payload : 'Unable to load the data'})
			});

	}
}