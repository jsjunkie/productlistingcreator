import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	uploadFile  () {
		var input = this.refs.fileinput;
		var file = input.files[0];

		this.props.uploadFile(file);
	}

	render () {
		var uploadMessage = this.props.uploadMessage 
							  ?	<div className={`uploadMessage margin10 ${this.props.style}`}>{this.props.uploadMessage}</div>
							  : '';
		return (
			<div className="main">
				{uploadMessage}
				<input 
					name="csv"
					ref='fileinput'
					type="file"
					className="uploadInput" 
					placeholder="Upload a products file.."></input>
				<button 
					className="uploadButton"
					onClick={() => this.uploadFile()}>Upload</button>
			</div>);
	}
}

export default Main;