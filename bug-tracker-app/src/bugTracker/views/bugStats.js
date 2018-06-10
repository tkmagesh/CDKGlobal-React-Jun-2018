import React from 'react';

let BugStats = ({bugs}) => {
	let closedCount = bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	return(
		<section className="stats">
			<span className="closed">{closedCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	);
};

export default BugStats;