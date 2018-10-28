import React, { Component } from 'react';

import './element.style.css';

class Element extends Component {
	render() {
		return(
			<div className='element-container'>
				<h1>3. Rendering Elements</h1>
                <div className='element-content'>
                    <ul>
                        <li>Để render các element react dùng reactDOM</li>
                        <li>Không giống với DOM khác, ReactDOM chỉ cập nhật những element bị thay đổi còn lại sẽ giữ nguyên</li>
                        <li>ReactDOM.render(element, document.getElementById('ID'));</li>
                    </ul>
                </div>
			</div>
		);
	}
}
export default Element;