import axios from 'axios';

export function addNew(newBugData){
	/*var p = axios.post('http://localhost:3030/bugs', newBugData);
	return p.then(response => response.data);*/

	return axios
		.post('http://localhost:3030/bugs', newBugData)
		.then(response => response.data);

}

export function load(){
	return axios
		.get('http://localhost:3030/bugs')
			.then(response => response.data);
}

export function save(bug){
	return axios
		.put('http://localhost:3030/bugs/' + bug.id, bug)
		.then(response => response.data);

}

export function remove(bug){
	return axios
		.delete('http://localhost:3030/bugs/' + bug.id)
		.then(response => response.data);	
}