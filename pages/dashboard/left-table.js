import React from 'react';
import { Table } from 'react-bootstrap';

function LeftTable() {
	return (
		<Table bordered size="sm" className="data-table" responsive="lg">
			<thead>
				<tr>
					<th>Name</th>
					<th>Qty</th>
					<th>Each</th>
					<th>Total</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>
						005454166515
						<span className="is-block"> PURIFIED WATER</span>
					</td>
					<td>1</td>
					<td>$0.99</td>
					<td>$0.99</td>
				</tr>
				<tr>
					<td>
						005454166515 <span className="is-block"> HANSENS POMEGR...</span>
					</td>
					<td>1</td>
					<td>$2.09</td>
					<td>$2.09</td>
				</tr>
				<tr>
					<td>
						005454166515 <span className="is-block"> (X2) TEST ITEM</span>
					</td>
					<td>5</td>
					<td>$1.80</td>
					<td>$9.00</td>
				</tr>
				<tr className="text-danger">
					<td colSpan="3">Discount Happy Hour 5%</td>
					<td>-$2.25</td>
				</tr>
			</tbody>

			<tbody class="table-gape"></tbody>

			<tbody className="data-summery">
				<tr>
					<td>Sub Total</td>
					<td></td>
					<td></td>
					<td>$11.62</td>
				</tr>
				<tr>
					<td>Fee</td>
					<td></td>
					<td></td>
					<td>$0.00</td>
				</tr>
				<tr>
					<td>Tax</td>
					<td></td>
					<td></td>
					<td>$0.50</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>$9</td>
					<td></td>
					<td>$12.12</td>
				</tr>
				<tr>
					<td>EBT available amount</td>
					<td></td>
					<td></td>
					<td>$4.87</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default LeftTable;
