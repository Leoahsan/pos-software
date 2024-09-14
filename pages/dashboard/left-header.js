import React from 'react';

function LeftHeader() {
	return (
		<div className="header">
			<div class="left">
				<p class="mb-6">John Doe</p>
				<p>8:43 AM 23/07/2024</p>
			</div>
			<div class="right">
				<p class="mb-6">
					Points: <span> 1863</span>
				</p>
				<p>
					Fuel Discount: <span> $4.50</span>
				</p>
			</div>
		</div>
	);
}

export default LeftHeader;
