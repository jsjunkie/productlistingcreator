import 'whatwg-fetch';
import { API_URL } from './constants';

export const service = {
	uploadFile : function (file, callback, errorCallback) {
		var data = new FormData();
		data.append('file', file);

		fetch(API_URL + '/upload', {
			method: 'POST',
			body: data
		}).then(res => {
			if (res.status === 200){
				res.text().then(message => {
					callback(message);
				})
			} else {
				errorCallback(res.status);
			}
		}).catch(err => {
			errorCallback(err);
		})
	},

	getProducts : function(callback, errorCallback){
		fetch(API_URL + '/mainlist')
			.then(function(res){
				res.json().then(data => {
					callback(data);
				}).catch(err => {
					errorCallback(err);
				})
			})
			.catch(function(err){
				errorCallback(err);
			})
	}
}
