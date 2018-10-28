import React, { Component } from 'react';

import './JSX.style.css'

class JSX extends Component {
	render() {
		return(
			<div className='JSX-container'>
				<h1>2. Introducing JSX</h1>
                <div className='JSX-content'>
                    <ul>
                        <li>React sử dụng JSX làm quy chuẩn</li>
                        <li>Không nhất thiết sử dụng JSX, nhưng việc sử dụng JSX lại đem lại khá nhiều lợi ích</li>
                        <li>JSX khá giống với HTML</li>
                        <li>Nếu muốn render nhiều elements thì phải có 1 tag bọc tất cả các elements đó</li>
                        <li>JavaScript Expressions có thể được sử dụng trong JSX</li>
                        <li>{1 + 1}</li>
                        <li>Không sử dụng if else trong JSX mà thay vào đó sử dụng toán tử 3 ngôi</li>
                        <li>Inline styles trong JSX thì nên dùng cameCase syntax, React cũng sẽ tự động thêm '<b>px</b>' vào sau các giá trị số cho các element</li>
                    </ul>
                </div>
			</div>
		);
	}
}
export default JSX;