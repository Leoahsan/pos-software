import { useEffect } from 'react';
import { StoreProvider } from 'easy-peasy';

// store import
import store from '../store';

// bootstrap and custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/montserrat/font.css';
import '../assets/css/custom.css';

function MyApp({ Component, pageProps }) {
	// global action
	const { setUser } = store.getActions().auth;

	// verify authentication
	useEffect(() => {
		const token = localStorage.getItem('authToken');
		if (token) {
			setUser({ token, user: { email: 'admin@example.com' } });
		}
	}, [setUser]);

	return (
		<StoreProvider store={store}>
			<Component {...pageProps} />
		</StoreProvider>
	);
}

export default MyApp;
