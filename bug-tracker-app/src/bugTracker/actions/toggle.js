export function toggle(bugToToggle){
	let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
	let payload = { oldBug : bugToToggle, newBug : toggledBug };
	return { type : 'UPDATE', payload : payload};		
}