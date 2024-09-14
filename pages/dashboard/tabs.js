import React, { useState } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

const TabsView = () => {
	// Managing which tab is currently active
	const [key, setKey] = useState('departments');

	return (
		<Tabs activeKey={key} className="tabs-nav" onSelect={(k) => setKey(k)}>
			{/* departments tab */}
			<Tab eventKey="departments" title="Departments">
				<Row className="data-card-groups">
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
				</Row>
				<div className="message-view">
					<h2>This item has been restricted!</h2>
					<p>Please swipe id card</p>
				</div>
			</Tab>

			{/* pending tab */}
			<Tab eventKey="pending" title="Pending (3)">
				<Row className="data-card-groups">
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
				</Row>
			</Tab>

			{/* history tab */}
			<Tab eventKey="history" title="History">
				<Row className="data-card-groups">
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
					<Col md={6}>
						<div class="data-card">
							<h2>
								005454166515 <b>$10</b>
							</h2>
							<p>PURIFIED WATER</p>
						</div>
					</Col>
				</Row>
			</Tab>
		</Tabs>
	);
};

export default TabsView;
