import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	render () {
		return (
			<div className="main">
				<input 
					className="uploadInput" 
					placeholder="Upload a products file.."></input>
				<button 
					className="uploadButton">Upload</button>
			</div>);
	}
}

export default Main;