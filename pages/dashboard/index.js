import React from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { FaBackspace } from 'react-icons/fa';

// components
import TabsView from './tabs';
import LeftTable from './left-table';
import LeftHeader from './left-header';
import Settings from './settings';

const POSInterface = () => {
	return (
		<Container fluid className="post-system">
			<Row>
				{/* left side column	*/}
				<Col md={4} className="left-section">
					{/* left side user info */}
					<LeftHeader />

					{/* left side data table */}
					<LeftTable />

					{/* table bottom action buttons */}
					<Row className="action-button-groups">
						<Col>
							<Button className="action-button" variant="secondary" block>
								Stop All
							</Button>
						</Col>
						<Col>
							<Button className="action-button" variant="secondary" block>
								Tax Exempt
							</Button>
						</Col>
					</Row>
					<Row className="action-button-groups">
						<Col>
							<Button className="action-button" variant="secondary" block>
								Price Override
							</Button>
						</Col>
						<Col>
							<Button className="action-button" variant="secondary" block>
								Discounts
							</Button>
						</Col>
					</Row>
					<Row className="action-button-groups">
						<Col>
							<Button className="action-button" variant="danger" block>
								Cancel
							</Button>
						</Col>
						<Col>
							<Button className="action-button" variant="secondary" block>
								Inventory
							</Button>
						</Col>
					</Row>
				</Col>

				{/* right column */}
				<Col md={8} className="right-section">
					<div className="tab-container">
						<div className="right-tabs">
							{/* Tabs component */}
							<TabsView />

							{/* system settings */}
							<Settings />
						</div>
					</div>

					{/* Input Section */}
					<Row className="calculation-buttons">
						<Col md={6} className="calculation-left">
							<InputGroup>
								<Form.Control
									className="calculation-input"
									placeholder="Input"
								/>
							</InputGroup>

							{/* Refund Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										7
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										8
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										9
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										Refund
									</Button>
								</Col>
							</Row>
							{/* @/ For Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										4
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										5
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										6
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										@/ For
									</Button>
								</Col>
							</Row>
							{/* No Sale Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										1
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										2
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										3
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										No Sale
									</Button>
								</Col>
							</Row>
							{/* PLU/ SKU Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										0
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										00
									</Button>
								</Col>
								<Col className="no-space" xs={2} md={2}>
									<Button className="action-button" variant="secondary" block>
										C
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										PLU/ SKU
									</Button>
								</Col>
							</Row>
						</Col>

						<Col md={6} className="calculation-right">
							{/* Backspace Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										<FaBackspace size={24} />
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$50
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$100
									</Button>
								</Col>
							</Row>
							{/* Card Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										Card
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$10
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$20
									</Button>
								</Col>
							</Row>
							{/* Hold Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										Hold
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$1
									</Button>
								</Col>
								<Col className="no-space" xs={3} md={3}>
									<Button className="action-button" variant="secondary" block>
										$5
									</Button>
								</Col>
							</Row>
							{/* Cash Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										Cash
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										$13
									</Button>
								</Col>
							</Row>
							{/* Pay Portion */}
							<Row className="action-button-groups">
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										Pay
									</Button>
								</Col>
								<Col className="no-space" xs={6} md={6}>
									<Button className="action-button" variant="secondary" block>
										$12.12
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default POSInterface;
