import React, { Component } from 'react';
import './MainList.css'

class MainList extends Component {
	constructor () {
		super();

		this.state = {
			list: [1, 2]
		}
	}

	render () {
		var rows = this.state.list.map(product => {
			return <div className="ProductRow">row</div>
		})
		return (
			<div className = "ProductList">
				{rows}
			</div>
			);
	}
}

export default MainList;