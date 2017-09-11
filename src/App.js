import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { service } from './service';
import Main from './Main';

class App extends Component {

  constructor () {
	  super();
 	  this.state = {
      uploadMessage: '',
      messageStyle: ''
   	};
  }

  uploadFile  (file) {
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Listing Creator</h2>
        </div>
        <Main uploadFile={(file) => this.uploadFile(file)} 
              uploadMessage = {this.state.uploadMessage}
              style={this.state.messageStyle}/>
      </div>
    );
  }
}

export default App;
