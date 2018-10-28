import React, { Component } from 'react';

import './Forms.style.css'

class Forms extends Component {

	state = {
		value: ''
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		alert('Name: ' + this.state.value);
	}


	render() {
		return(
			<div className='Forms-container'>
				<h1>9. Forms</h1>
				<b>Ví dụ:</b>
                <form onSubmit={this.handleSubmit}>
					<label>
					Name:
					<input type="text" required value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
export default Forms;