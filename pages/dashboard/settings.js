import React from 'react';
import Link from 'next/link';
import { FaCog } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';
import { useStoreActions } from 'easy-peasy';

function Settings() {
	// global action
	const setShow = useStoreActions(({ user }) => user.setShow);

	return (
		<Dropdown align="end">
			<Dropdown.Toggle variant="link">
				<FaCog size={14} />
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item>Profile</Dropdown.Item>
				<Dropdown.Item>User List</Dropdown.Item>
				<Dropdown.Item onClick={() => setShow(true)}>Add User</Dropdown.Item>
				<Dropdown.Divider />
				<Link legacyBehavior href="/login">
					<Dropdown.Item href="/login">Logout</Dropdown.Item>
				</Link>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default Settings;
