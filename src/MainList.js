import React, { Component } from 'react';
import { service } from './service';
import './MainList.css'

class MainList extends Component {
	constructor () {
		super();

		this.state = {
			list: [],
			uploadMessage: '',
			messageStyle: ''
		}
	}

	componentDidMount () {
		service.getProducts((data) => {
			this.setState({list: data});
		}, function(err){
			console.log(err);
		})
	}

	addToAmazon (id) {
		debugger;
		service.addToAmazon(id, () => {
			this.setState({uploadMessage: "Added to Amazon", messageStyle: 'uploadMessageGreen'})
      		var t = setInterval(() => {
        		this.setState({uploadMessage: ''});
        		clearInterval(t);
      		}, 3000);
		}, (err) => {
			console.log(err);
			this.setState({uploadMessage: "There was an error.", messageStyle: 'uploadMessagePink'})
      			var t = setInterval(() => {
        		this.setState({uploadMessage: ''});
        		clearInterval(t);
      		}, 3000);
		})
	}

	render () {
		var message = this.state.uploadMessage 
							  ?	<div className={`uploadMessage margin10 ${this.state.messageStyle}`}>{this.state.uploadMessage}</div>
							  : '';
		var heading = <div className="ProductListHeading">Main list</div>
		var noitem = this.state.list.length === 0 
						? <div className = "NoProductMessage">No item is added. Upload a CSV on Home Screen.</div>
						: '';
		var rows = this.state.list.map(product => {
			var spans = Object.keys(product).filter((key) => {
				return key !== "_id";
			}).map(key => {
				return <div className="ProductRowDetail">{product[key]}</div>
			});

			var addbutton = !product.amazon ?
							<button className="ProductRowButton" onClick={() => this.addToAmazon(product._id)}>Add to Amazon</button> :
							'';
			return (<div key={product._id} className="ProductRow">
						<div style={{display:'inline-block', width: '90%'}}>{spans}</div>
						{addbutton}
					</div>);
		})
		return (
			<div className = "ProductList">
				{message}
				{heading}
				{noitem}
				{rows}
			</div>
			);
	}
}

export default MainList;