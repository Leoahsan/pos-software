import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'; // Import FloatingLabel
import { useStoreActions } from 'easy-peasy';

function AddUsers() {
	// Local state to handle form data
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		customerType: 'Retail',
		notes: '',
	});

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Global action to close the modal
	const setShow = useStoreActions(({ user }) => user.setShow);

	// Handle form submission (e.g., adding a user)
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can use formData here to save the user data
		console.log('User Data:', formData);
		// Close the modal after saving
		setShow(false);
	};

	return (
		<Modal show={true} onHide={() => setShow(false)} centered>
			<Modal.Header closeButton>
				<Modal.Title>Add New User</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Row>
						{/* First Name */}
						<Col>
							<FloatingLabel
								controlId="floatingFirstName"
								label="First Name"
								className="mb-3">
								<Form.Control
									type="text"
									placeholder="First Name"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									required
								/>
							</FloatingLabel>
						</Col>

						{/* Last Name */}
						<Col>
							<FloatingLabel
								controlId="floatingLastName"
								label="Last Name"
								className="mb-3">
								<Form.Control
									type="text"
									placeholder="Last Name"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									required
								/>
							</FloatingLabel>
						</Col>
					</Row>

					{/* Email */}
					<FloatingLabel
						controlId="floatingEmail"
						label="Email Address"
						className="mb-3">
						<Form.Control
							type="email"
							placeholder="name@example.com"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</FloatingLabel>

					{/* Phone Number */}
					<FloatingLabel
						controlId="floatingPhone"
						label="Phone Number"
						className="mb-3">
						<Form.Control
							type="text"
							placeholder="Phone Number"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							required
						/>
					</FloatingLabel>

					{/* Address */}
					<FloatingLabel
						controlId="floatingAddress"
						label="Address"
						className="mb-3">
						<Form.Control
							type="text"
							placeholder="Address"
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
						/>
					</FloatingLabel>

					{/* City, State, ZIP */}
					<Row className="mb-3">
						<Col>
							<FloatingLabel controlId="floatingCity" label="City">
								<Form.Control
									type="text"
									placeholder="City"
									name="city"
									value={formData.city}
									onChange={handleChange}
									required
								/>
							</FloatingLabel>
						</Col>

						<Col>
							<FloatingLabel controlId="floatingState" label="State">
								<Form.Control
									type="text"
									placeholder="State"
									name="state"
									value={formData.state}
									onChange={handleChange}
									required
								/>
							</FloatingLabel>
						</Col>

						<Col>
							<FloatingLabel controlId="floatingZip" label="ZIP">
								<Form.Control
									type="text"
									placeholder="ZIP"
									name="zip"
									value={formData.zip}
									onChange={handleChange}
									required
								/>
							</FloatingLabel>
						</Col>
					</Row>

					{/* Customer Type */}
					<FloatingLabel
						controlId="floatingCustomerType"
						label="Customer Type"
						className="mb-3">
						<Form.Select
							name="customerType"
							value={formData.customerType}
							onChange={handleChange}
							required>
							<option value="Retail">Retail</option>
							<option value="Wholesale">Wholesale</option>
						</Form.Select>
					</FloatingLabel>

					{/* Notes */}
					<FloatingLabel
						controlId="floatingNotes"
						label="Notes"
						className="mb-3">
						<Form.Control
							as="textarea"
							placeholder="Any additional notes"
							name="notes"
							value={formData.notes}
							onChange={handleChange}
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShow(false)}>
					Close
				</Button>
				<Button variant="primary" onClick={handleSubmit}>
					Save User
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default AddUsers;
