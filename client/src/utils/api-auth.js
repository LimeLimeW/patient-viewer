export const signin = user => {
	return fetch('http://localhost:4000/api/users/login/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include',
		body: JSON.stringify(user)
	})
		.then(response => {
            console.log(response);
            return response;
		})
		.catch(err => console.log(err));
};

export const signout = () => {
	return fetch('http://localhost:4000/api/users/logout/', {
		method: 'POST'
	})
		.then(response => {
            console.log(response);
            return response;
		})
		.catch(err => console.log(err));
};