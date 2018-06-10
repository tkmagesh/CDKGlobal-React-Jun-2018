export function removeClosed(bugs){
	let bugsToRemove = bugs.filter(bug => bug.isClosed);
	let removeClosedBugsAction = { type : 'REMOVE', payload : bugsToRemove};
	return removeClosedBugsAction;
}