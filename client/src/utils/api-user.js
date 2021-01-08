export const registerUser = user => {
	return fetch('http://localhost:4000/api/users/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: JSON.stringify(user)
	})
		.then(response => {
			return response;
		})
		.catch(err => console.log(err));
};

export const findUserProfile = (params, credentials) => {
	return fetch('http://localhost:4000/api/users/:id' + params.userId, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: 'Bearer ' + credentials.t
		}
	})
		.then(response => {
			return response;
		})
		.catch(err => console.error(err));
};
