import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CallToAPI } from './service';
import Main from './Main';

class App extends Component {

  constructor () {
	super();
 	this.state = {
	  test: ''
   	};
  }

  componentDidMount () {
  	CallToAPI(res => {
  	  this.setState({test: res});
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
        <Main />
        <p className="App-intro">
         {this.state.test}
	       </p>
      </div>
    );
  }
}

export default App;
