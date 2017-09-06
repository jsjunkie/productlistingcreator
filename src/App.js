import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { service } from './service';
import Main from './Main';

class App extends Component {

  constructor () {
	  super();
 	  this.state = {
   	};
  }

  uploadFile  (file) {
    service.uploadFile(file, res => {

    }, err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Listing Creator</h2>
        </div>
        <Main uploadFile={(file) => this.uploadFile(file)}/>
      </div>
    );
  }
}

export default App;
