var SM = (function(){
	var _currentState = undefined,
		_listeners = [],
		_reducer = null,
		_init_action = '@@INIT_ACTION';


	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		return { getState, subscribe, dispatch};
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };
})();