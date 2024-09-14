import { Modal, Button, Table } from 'react-bootstrap';
import { useStoreState, useStoreActions } from 'easy-peasy';

const UserListModal = () => {
	// Fetch users and modal state from the global state
	const users = useStoreState(({ user }) => user.users);

	// Fetch action to close the modal
	const setShowList = useStoreActions(({ user }) => user.setShowList);

	return (
		<Modal show={true} onHide={() => setShowList(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title>User List</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{users.length > 0 ? (
					<Table bordered hover responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Customer Type</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{user.firstName}</td>
									<td>{user.lastName}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{user.customerType}</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<p>No users added yet.</p>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShowList(false)}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default UserListModal;
