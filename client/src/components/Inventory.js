import {
	Box,
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Paper,
} from '@material-ui/core';

export const Inventory = () => {
	return (
		<Box m={5}>
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
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</Box>
	);
};
