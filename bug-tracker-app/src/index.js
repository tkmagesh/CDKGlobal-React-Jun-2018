
import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

import './index.css';

class ErrorDisplay extends Component{
	render(){

		let {errorMessage, show} = this.props;
		if (show){
			return(
				<div>
					<div>{errorMessage}</div>
					<input type="button" value="Hide" onClick={this.props.hide} />
				</div>
			)
		} else {
			return <div>{this.props.children}</div>;
		}
	}
}

let ConnectedError = connect(
	({errorData}) => (errorData),
	(dispatch) => {
		return {
			hide(){
				dispatch({type : 'HIDE_ERROR'});
			}
		}
	}
)(ErrorDisplay);

/*

*/

ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<div>
				<p>
				<Link to="/">Bug Tracker</Link>
				<br/>
				<Link to="/spinner">Spinner</Link>
				<br />
				</p>
			  <Route exact path="/" component={BugTracker} />
		      <Route path="/bugs" component={BugTracker} />
		      <Route path="/spinner" component={Spinner} />
		    </div> 
	    </Router>
	</Provider>
	, document.getElementById('root')
);