import React, { Component } from 'react';

import './CompositionVsInheritance.style.css'

class Hello extends Component {
	render() {
		const color = this.props.color;
		return(
			<div className={color}>
				Hello
			</div>
		);
	}
}

class CompositionVsInheritance extends Component {
	render() {
		return(
			<div className='CompositionVsInheritance-container'>
				<h1>11. Composition vs Inheritance</h1>
				<b>Ví dụ: Kế thừa component Hello và chỉnh css cho nó</b>
				<Hello color={'red'}/>
			</div>
		);
	}
}
export default CompositionVsInheritance;