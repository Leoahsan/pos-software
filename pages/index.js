/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStoreState } from 'easy-peasy';

export default function Home() {
	// use router
	const router = useRouter();

	// global state
	const user = useStoreState(({ auth }) => auth.user);

	// if user is authenticated, redirect to dashboard (Home.js)
	useEffect(() => {
		if (user) {
			// assuming your dashboard is in 'home.js'
			// router.push('/home');
			router.push('/login');
		} else {
			// if not authenticated, redirect to login page
			router.push('/home');
			// router.push('/login');
		}
	}, [user]);

	return <div>Loading...</div>;
}
