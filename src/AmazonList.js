import React, { Component } from 'react';
import { service } from './service';
import './MainList.css'

class AmazonList extends Component {
	constructor () {
		super();

		this.state = {
			list: [],
			uploadMessage: '',
			messageStyle: ''
		}
	}

	componentDidMount () {
		service.getAmazonProducts((data) => {
			this.setState({list: data});
		}, err => {
			console.log(err);
			this.setState({uploadMessage: "There was an error", messageStyle: 'uploadMessagePink'});
		})
	}

	removeFromAmazon (id) {
		service.removeFromAmazon(id, () => {
			var newlist = this.state.list.filter((product) => {
				return product._id !== id;
			});
			this.setState({list: newlist, uploadMessage: "Removed from Amazon", messageStyle: 'uploadMessageGreen'})
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
		});
	}

	render () {
		var message = this.state.uploadMessage 
							  ?	<div className={`uploadMessage margin10 ${this.state.messageStyle}`}>{this.state.uploadMessage}</div>
							  : '';
		var heading = <div className="ProductListHeading">Amazon list</div>
		var noitem = this.state.list.length === 0 && this.state.uploadMessage === ''
						? <div className = "NoProductMessage">No item is added. Add item from Main List Screen.</div>
						: '';
		var rows = this.state.list.map(product => {
			var spans = Object.keys(product).filter((key) => {
				return key !== "_id";
			}).map(key => {
				return <div className="ProductRowDetail">{product[key]}</div>
			});

			var button = <button className="ProductRowButton" onClick={() => this.removeFromAmazon(product._id)}>Remove</button>
			return (<div key={product._id} className="ProductRow">
						<div style={{display:'inline-block', width: '90%'}}>{spans}</div>
						{button}
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

export default AmazonList;