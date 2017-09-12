import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><Link className="App-link" to="/">Product Listing Creator</Link></h2>
          <ul className="App-links">
            <li><Link className="App-link Nav-link" to="/">Home</Link></li>
            <li><Link className="App-link Nav-link" to="/mainlist">List</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
