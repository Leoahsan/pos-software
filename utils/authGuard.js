/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreState } from 'easy-peasy';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function authGuard(WrappedComponent) {
	const ComponentWithAuth = (props) => {
		// use router
		const router = useRouter();

		// global state
		const user = useStoreState(({ auth }) => auth.user);

		useEffect(() => {
			if (!user) {
				router.push('/home');
				// router.push('/login');
			}
		}, [user]);

		return user ? <WrappedComponent {...props} /> : <div>Loading...</div>;
	};

	ComponentWithAuth.displayName = `AuthGuard(${
		WrappedComponent.displayName || WrappedComponent.name || 'Component'
	})`;

	return ComponentWithAuth;
}

export default authGuard;
