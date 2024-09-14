import { createStore } from 'easy-peasy';
import authModel from './models/auth';
import userModel from './models/user';

// create and export the store
const store = createStore({
	auth: authModel,
	user: userModel,
});

export default store;
