import React, { PureComponent } from 'react';

class BugItem extends PureComponent{
	constructor(props){
		super(props);
		this.onBugNameClick = this.onBugNameClick.bind(this);
	}
	onBugNameClick(){
		let { bug, toggle } = this.props;
		toggle(bug);
	}
	render(){
		console.log('BugItem render triggered');
		let { bug } = this.props; 
		let bugEle = bug.isClosed ? (<span className="bugname closed" onClick={this.onBugNameClick}> {bug.name}</span>) : 
		(<span className="bugname" onClick={this.onBugNameClick}> {bug.name}</span>)
		return(
			<li>
				{bugEle}
				<div>[{bug.isClosed.toString()}]</div>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}
export default BugItem;