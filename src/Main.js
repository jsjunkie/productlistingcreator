import React, { Component } from 'react';
import './Main.css';
import { service } from './service';

class Main extends Component {

  constructor () {
	  super();
 	  this.state = {
      	uploadMessage: '',
      	messageStyle: ''
   	  };
  }

  uploadFile  () {
  	var input = this.refs.fileinput;
	var file = input.files[0];
    service.uploadFile(file, res => {
      this.setState({uploadMessage: res, messageStyle: 'uploadMessageGreen'})
      var t = setInterval(() => {
        this.setState({uploadMessage: ''});
        clearInterval(t);
      }, 3000);
    }, err => {
      console.error(err);
      this.setState({uploadMessage: "There was an error", messageStyle: 'uploadMessagePink'});
      var t = setInterval(() => {
        this.setState({uploadMessage: ''});
        clearInterval(t);
      }, 3000)
    });
  }

	

	render () {
		var uploadMessage = this.state.uploadMessage 
							  ?	<div className={`uploadMessage margin10 ${this.state.messageStyle}`}>{this.state.uploadMessage}</div>
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