import { useState } from 'react';
import {
	Box,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Paper,
	TableBody,
	Button,
	IconButton,
	Checkbox,
} from '@material-ui/core';

import { Edit, Warning } from '@material-ui/icons';
import AdjustStock from './AdjustStock';

const rows = [
	{
		id: 1,
		itemName: 'dljf',
		itemCode: 687,
		category: 'dfa',
		stockQuantity: 34,
		stockOnHold: 0,
		stockValue: 43,
		price: 342,
		lowStockUnits: 1,
	},
	{
		id: 2,
		itemName: 'asfd',
		itemCode: 863,
		category: 'dfa',
		stockQuantity: 34,
		stockOnHold: 0,
		stockValue: 43,
		price: 342,
		lowStockUnits: 1,
	},
];

export const Inventory = () => {
	const [adjustStockModalState, setAdjustStockModalState] = useState(false);
	return (
		<Box m={3}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell padding='checkbox'>
								<Checkbox color='primary' />{' '}
							</TableCell>
							<TableCell>Item Name</TableCell>
							<TableCell>Item Code</TableCell>
							<TableCell>Category</TableCell>
							<TableCell>Stock Quantity</TableCell>
							<TableCell>Stock On Hold</TableCell>
							<TableCell>Stock Value</TableCell>
							<TableCell>Purchase Price</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell className='selectCheckbox' padding='checkbox'>
									<Checkbox color='primary' />
								</TableCell>
								<TableCell component='th' scope='row'>
									{row.itemName}
								</TableCell>
								<TableCell>{row.itemCode}</TableCell>
								<TableCell>{row.category}</TableCell>
								<TableCell>{row.stockQuantity}</TableCell>
								<TableCell>{row.stockOnHold}</TableCell>
								<TableCell>&#8377; {row.stockValue}</TableCell>
								<TableCell>&#8377; {row.price}</TableCell>
								<TableCell>
									{row.stockQuantity <= row.lowStockUnits && (
										<IconButton>
											<Warning color='secondary' />{' '}
										</IconButton>
									)}
								</TableCell>
								<TableCell>
									{' '}
									<IconButton>
										<Edit color='disabled' />{' '}
									</IconButton>
								</TableCell>
								<TableCell>
									<Button
										variant='outlined'
										color='primary'
										onClick={() => {
											setAdjustStockModalState((prevState) => !prevState);
										}}>
										Adjust Stock
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<AdjustStock
				adjustStockModalState={adjustStockModalState}
				setAdjustStockModalState={setAdjustStockModalState}
			/>
		</Box>
	);
};
