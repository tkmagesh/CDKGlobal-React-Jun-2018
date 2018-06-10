import React, { Component } from 'react';
import BugItem from './bugItem';

class BugList extends Component{
	constructor(props){
		super(props);
		this.onRemoveClosedClick = this.onRemoveClosedClick.bind(this);
	}
	onRemoveClosedClick(){
		this.props.removeClosed(this.props.bugs);
	}
	render(){
		let { bugs, toggle } = this.props,
			bugItems = bugs.map((bug, index) => (
				<BugItem key={index} bug={bug} toggle={toggle}/>
			))
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick} />
			</section>
		)

	}
}
export default BugList;