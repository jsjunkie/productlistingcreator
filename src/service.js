import 'whatwg-fetch';
import { API_URL } from './constants';

export const CallToAPI = (callback, errorCallback) => {
	fetch(API_URL)
	  .then(res => {
		res.text().then(text => {
		  callback(text);
  		})
	   })
   	  .catch(err => {
		errorCallback(err)
  	   });
}
