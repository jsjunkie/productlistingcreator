import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CallToAPI } from './service';

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
 	})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         {this.state.test}
	</p>
      </div>
    );
  }
}

export default App;
