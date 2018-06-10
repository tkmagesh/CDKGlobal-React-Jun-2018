import React, { Component } from 'react';

class BugEdit extends Component{
	txtBugNameRef = React.createRef();
	constructor(props){
		super(props);
		this.onAddNewClick = this.onAddNewClick.bind(this);
	}
	onAddNewClick(){
		let bugName = this.txtBugNameRef.current.value;
		this.props.addNew(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref={this.txtBugNameRef} />
				<input type="button" value="Add New" onClick={this.onAddNewClick} />
			</section>
		)
	}
}

export default BugEdit;

