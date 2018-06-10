

export function addNew(bugName){
	let newBugData = { id : 0, name : bugName, isClosed : false, createdAt : new Date()};
	return { type : 'ADD_NEW', payload : newBug};
}