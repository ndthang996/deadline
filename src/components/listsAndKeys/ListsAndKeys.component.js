import React, { Component } from 'react';

import './ListsAndKeys.style.css'

class ListsAndKeys extends Component {

	render() {
        const numbers = this.props.ListNum;
        console.log(numbers);
		return(
			<div className='ListsAndKeys-container'>
				<h1>8. Lists and Keys</h1>
                <div className='ListsAndKeys-content'>
                    <ol>
                        <li>Lists</li>
                        <ul>
                            <li>Các component đều cần thuộc tính key</li>
                            <li>việc gán cho nó một key để định danh và đảm bảo rằng các component đều ở đúng vị trí của nó, tối ưu hóa việc rendering</li>
                        </ul>
                        <li>Keys</li>
                        <ul>
                            <li>Dùng map() để duyệt các phần tử mảng</li>
                        </ul>
                    </ol>
                </div>
                <b>Ví dụ:</b>
                    {numbers.map( (node, index) =>  {
                        return <div style={{color:'red'}} key={index}>{node}</div>
                    })}
			</div>
		);
	}
}
export default ListsAndKeys;