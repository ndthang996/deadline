import React, { Component } from 'react';

import './LiftingStateUp.style.css'

class LiftingStateUp extends Component {

	state = {
		doF: 0,
		doC: ''
	}

	handleChange = (event) => {
		this.setState({doC: event.target.value, doF: (parseInt(event.target.value )* 9 / 5) + 32});
		console.log(this.state.doF);
	}

	render() {
		const { doF, doC} = this.state;
		return(
			<div className='LiftingStateUp-container'>
				<h1>10. Lifting State Up</h1>
				<b>Ví dụ:</b>
				<input type="text" required onChange={this.handleChange} placeholder='Nhập độ C'/>
				<div>{doC} độ C = {doF} độ F</div>
			</div>
		);
	}
}
export default LiftingStateUp;