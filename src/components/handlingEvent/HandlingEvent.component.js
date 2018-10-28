import React, { Component } from 'react';

import './HandlingEvent.style.css';

class HandlingEvent extends Component {
	state = {
		isClick: false
	}

	handeClick = () => {
		this.setState({isClick: !this.state.isClick});
	}

	render() {
		return(
			<div className='HandlingEvent-container'>
				<h1>6. Handling Events</h1>
				<div className='HandlingEvent-content'>
					<ul>   
						<li>Tên của React Events được đặt theo kiểu camelCase chứ không phải lowercase</li>
						<li>Truyền JSX vào một function để handle event chứ không phải là một string</li>
						<li>Không thể gọi return false để dừng hành động mặc định</li>
						<li>Dùng preventDefault để dừng hành động mặc định</li>
						<li>Cẩn phải thận trọng với việc sử dụng this trong việc JSX callbacks</li>
					</ul>
				</div>
				<b>Ví dụ: </b>
				<button onClick={this.handeClick}>{this.state.isClick ? 'ON': 'OFF'}</button>
			</div>
		);
	}
}
export default HandlingEvent;