import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	uploadFile  () {
		var input = this.refs.fileinput;
		var file = input.files[0];

		this.props.uploadFile(file);
	}

	render () {
		return (
			<div className="main">
				<input 
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