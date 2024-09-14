/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';

// components
import MainLayout from '../layout/MainLayout';
import Dashboard from './dashboard';

const Home = () => {
	// use router
	const router = useRouter();

	// local state
	const [loading, setLoading] = useState(true);

	// global state
	const user = useStoreState(({ auth }) => auth.user);

	useEffect(() => {
		if (user) {
			setLoading(false);
		} else {
			router.push('/home');
			// router.push('/login');
		}
	}, [user]);

	// if (loading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<MainLayout>
			<Dashboard />
		</MainLayout>
	);
};

export default Home;
