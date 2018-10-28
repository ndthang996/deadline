import React, { Component } from 'react';

import './ComponentAndProps.style.css';

class ComponentAndProps extends Component {
	render() {
		return(
			<div className='componentAndProps-container'>
				<h1>4. Components and Props</h1>
        <div className='componentAndProps-content'>
            <ol>
                <li>Component</li>
                <ul>
                    <li>Cho phép chúng ta chia nhỏ các thành phần UI độc lập mục đích để dễ quản lý và tái sử dụng nó</li>
                    <li>Nếu chúng ta chia càng nhỏ thì khả năng tái sử dụng của component đó càng cao</li>
                </ul>
                <li>Props</li>
                <ul>
                    <li>Là properties của một component</li>
                    <li>Có thể thay đổi props của component bằng cách truyền dữ liệu từ bên ngoài vào</li>
                    <li>Props có thể là 1 object, funtion, string, number...</li>
                    <li>Khi một props được truyền vào component thì nó là bất biến, dữ liệu của nó không được thay đổi kiểu như một "pure" function</li>
                    <li>Props đặc biệt: children</li>
                    <li>Được truyền dữ liệu trong cặp tag đóng mở của component</li>
                </ul>
            </ol>
        </div>
        <div><b>Ví dụ tuyền prop:</b> {this.props.testprop}</div>
        <div><b>Ví dụ tuyền children:</b> {this.props.children}</div>
			</div>
		);
	}
}
export default ComponentAndProps;