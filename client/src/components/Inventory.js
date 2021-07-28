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

export const Inventory = ({ selected, setSelected, data }) => {
	const [adjustStockModalState, setAdjustStockModalState] = useState(false);
	const [adjustStockModalData, setAdjustStockModalData] = useState(null);

	const handleCheckboxClick = (event, id) => {
		event.stopPropagation();
		console.log('checkbox select');
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}
		setSelected(newSelected);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			setSelected(data.map((n) => n.id));
			return;
		}
		setSelected([]);
	};

	const isSelected = (id) => selected.indexOf(id) !== -1;

	return (
		<Box m={3}>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell padding='checkbox'>
								<Checkbox
									color='primary'
									indeterminate={
										selected.length > 0 && selected.length < data.length
									}
									onChange={handleSelectAllClick}
									checked={selected.length === data.length}
								/>{' '}
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
						{data.map((item) => (
							<TableRow key={item.id}>
								<TableCell className='selectCheckbox' padding='checkbox'>
									<Checkbox
										color='primary'
										onClick={(event) => handleCheckboxClick(event, item.id)}
										checked={isSelected(item.id)}
									/>
								</TableCell>
								<TableCell component='th' scope='row' align='center'>
									{item.itemName}
								</TableCell>
								<TableCell align='center'>{item.itemCode}</TableCell>
								<TableCell align='center'>{item.category}</TableCell>
								<TableCell align='center'>{item.stockQuantity}</TableCell>
								<TableCell align='center'>{item.stockOnHold}</TableCell>
								<TableCell align='center'>
									&#8377; {item.stockQuantity * item.price}
								</TableCell>
								<TableCell align='center'>&#8377; {item.price}</TableCell>
								<TableCell align='center'>
									{item.stockQuantity <= item.lowStockUnits && (
										<Warning color='secondary' />
									)}
								</TableCell>
								<TableCell align='center'>
									{' '}
									<IconButton>
										<Edit color='disabled' />{' '}
									</IconButton>
								</TableCell>
								<TableCell align='center'>
									<Button
										variant='outlined'
										color='primary'
										onClick={() => {
											setAdjustStockModalState((prevState) => !prevState);
											setAdjustStockModalData(item);
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
				data={adjustStockModalData}
				setAdjustStockModalData={setAdjustStockModalData}
			/>
		</Box>
	);
};
