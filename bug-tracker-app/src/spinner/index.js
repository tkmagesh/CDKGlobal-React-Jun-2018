import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import spinnerActionCreators from './actions';

let Spinner = ({ value, increment, decrement }) => (
	<div>
		<input type="button" value="DECREMENT" onClick={decrement}/>
		<span> [{value}] </span>
		<input type="button" value="INCREMENT" onClick={increment}/>
	</div>
);


function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return { value : spinnerValue };	
}


function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}
export default connect(mapStateToSpinnerProps, mapDispatchToSpinnerProps)(Spinner);