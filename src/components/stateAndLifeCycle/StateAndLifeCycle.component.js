import React, { Component } from 'react';

import './StateAndLifeCycle.style.css';

class StateAndLifeCycle extends Component {
    state = { date: new Date() };

    componentDidMount() {
			this.timerID = setInterval(
				() => this.tick(),
				1000
			);
		}
		
		componentWillUnmount() {
			clearInterval(this.timerID);
		}

		tick() {
			this.setState({
				date: new Date()
			});
		}

	render() {
		return(
			<div className='StateAndLifeCycle-container'>
				<h1>5. State and Lifecycle</h1>
                <div className='StateAndLifeCycle-content'>
                    <ol>
                        <li>State</li>
                        <ul>
                            <li>State biểu diễn trạng thái của component</li>
                            <li>Là private chỉ có thể thay đổi bên trong bản thân của chính component đó</li>
                            <li>Change states bằng cách gọi this.setState()</li>
                        </ul>
                        <li>Lifecycle</li>
                        <ul>
                            <li>Là methods của component, bao gồm:</li>
                            <li><b>componentWillMount</b>: sẽ thực thi trước khi 1 component được render trên cả server và client</li>
                            <li><b>componentDidMount</b>: được thực thi khi 1 component được render trên client. Là nơi AJAX requests, sử dụng để kết nối các JS framework và các function với lelayed execution như setTimeout hoặc setlnterval</li>
                            <li><b>componentWillReceiveProps</b>: sẽ được thực thi ngay khi thuộc tính props được update và trước khi component được render lại</li>
                            <li><b>shouldComponentUpdate</b>: trả về kết quả true hoặc false. Xác định 1 component có được update hay không. Mặc định là true</li>
                            <li><b>componentWillUpdate</b>: được gọi khi update state của component trước khi nó render lại</li>
                            <li><b>componentDidUpdate</b>: sau khi <b>componentWillUpdate</b> được gọi xong thì đến lượt <b>componentDidUpdate</b> được gọi</li>
                            <li><b>componentWillUnmount</b>; được gọi khi unmout 1 component kiểu như xóa khỏi react</li>
                        </ul>
                    </ol>
                </div>
                <span><b>Ví dụ: </b></span><h2 style={{color: 'red'}}> {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
export default StateAndLifeCycle;