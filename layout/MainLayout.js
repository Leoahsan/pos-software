import { useStoreState } from 'easy-peasy';
import AddUsers from '@/components/modals/add-users';

function MainLayout({ children }) {
	// global action
	const show = useStoreState(({ user }) => user.show);

	return (
		<>
			<main>{children}</main>
			{/* modals */}
			{show && <AddUsers />}
		</>
	);
}

export default MainLayout;
