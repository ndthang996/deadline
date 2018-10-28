import React, { Component } from 'react';

import './ConditionalRendering.style.css'

class ConditionalRendering extends Component {
	state = {
		isLog: false
	}

	handeClick = () => {
		this.setState({isLog: !this.state.isLog});
	}

	render() {
		return(
			<div className='ConditionalRendering-container'>
				<h1>7. Conditional Rendering</h1>
				<div className='ConditionalRendering-content'>
					<ul>
						<li>Có thể tạo các component riêng biệt chứa những hành động</li>
						<li>Hoạt động tương tự với Conditional trong Javascript</li>
						<li>Sử dụng javascript operator như là if tạo các phần tử đại diện cho trạng thái hiện tại</li>
					</ul>
				</div>
				<button onClick={this.handeClick}>Click me</button>
				{this.state.isLog ? (<span style={{color: 'green', marginLeft: '10px'}}>ON</span>) : (<span style={{color: 'red', marginLeft: '10px'}}>OFF</span>)}
			</div>
		);
	}
}
export default ConditionalRendering;