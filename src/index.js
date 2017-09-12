import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Main';
import MainList from './MainList';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<App />
			<Route exact path="/" component = {Main} /> 
			<Route path="/mainlist" component = {MainList} />
		</div>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
