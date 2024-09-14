import { action } from 'easy-peasy';

const userModel = {
	users: [],
	show: false,
	showList: false,

	// set add user modal show/ hide
	setShow: action((state, payload) => {
		state.show = payload;
	}),

	// set user list modal show/ hide
	setShowList: action((state, payload) => {
		state.showList = payload;
	}),

	// add a user
	addUser: action((state, payload) => {
		state.users.push(payload);
	}),
};

export default userModel;
