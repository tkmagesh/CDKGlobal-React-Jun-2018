import * as bugServer from '../services/bugServer';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		bugServer
			.save(toggledBugData)
			.then(toggledBug => {
				let payload = { oldBug : bugToToggle, newBug : toggledBug };
				dispatch({ type : 'UPDATE', payload : payload});		
			})
			.catch(err => {
				dispatch({ type : 'SHOW_ERROR', payload : 'Unable to load the data'})
			});
	};
}