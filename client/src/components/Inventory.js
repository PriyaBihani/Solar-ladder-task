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
} from '@material-ui/core';

import { Edit, Warning } from '@material-ui/icons';

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
	},
];

export const Inventory = () => {
	return (
		<Box m={3}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
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
									{' '}
									<IconButton>
										<Warning color='secondary' />{' '}
									</IconButton>
								</TableCell>
								<TableCell>
									{' '}
									<IconButton>
										<Edit color='disabled' />{' '}
									</IconButton>
								</TableCell>
								<TableCell>
									<Button variant='outlined' color='primary'>
										Secondary
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};
