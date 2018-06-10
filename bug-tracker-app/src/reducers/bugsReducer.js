export function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let { oldBug, newBug } = action.payload;
		let newState = currentState.map(bug => bug.id === oldBug.id ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bugToRemove.id !== bug.id);
		return newState;
	}
	return currentState;
}