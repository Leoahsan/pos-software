import { action, thunk } from 'easy-peasy';

const authModel = {
	user: null,
	token: null,

	// set user
	setUser: action((state, payload) => {
		state.user = payload.user;
		state.token = payload.token;
	}),

	// logout & clear token from storage
	logout: action((state) => {
		state.user = null;
		state.token = null;
		localStorage.removeItem('authToken');
	}),

	// login to the site
	login: thunk(async (actions, payload) => {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			const data = await response.json();
			if (data.token) {
				localStorage.setItem('authToken', data.token);
				actions.setUser({ user: data.user, token: data.token }); // Ensure this sets the user state
			}
		} catch (error) {
			console.error('Login Error:', error);
		}
	}),
};

export default authModel;
