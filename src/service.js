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
				callback()
			} else {
				errorCallback(res.status);
			}
		}).catch(err => {
			errorCallback(err);
		})
	}
}
