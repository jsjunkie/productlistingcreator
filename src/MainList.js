import React, { Component } from 'react';
import { service } from './service';
import './MainList.css'

class MainList extends Component {
	constructor () {
		super();

		this.state = {
			list: [1, 2]
		}
	}

	componentDidMount () {
		service.getProducts((data) => {
			this.setState({list: data});
		}, function(err){
			console.log(err);
		})
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