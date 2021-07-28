import { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Delete, Add, Close } from '@material-ui/icons';
import Lodal from './Upsert/Lodal';

export const Actions = ({ showLowStock, setShowLowStock, selected }) => {
	const [addModalState, setaddModalState] = useState(false);

	return (
		<Box
			component='div'
			mt={5}
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}>
			<Button
				color='primary'
				variant={showLowStock ? 'outlined' : 'text'}
				onClick={() => setShowLowStock((prevState) => !prevState)}>
				Show Low Stock {showLowStock && <Close fontSize='small' />}
			</Button>
			<Button
				variant='outlined'
				disabled={selected.length > 0 ? false : true}
				color={selected.length > 0 ? 'secondary' : 'primary'}>
				<Delete />
				{'  '} Delete Selected
			</Button>
			<Button
				onClick={() => {
					console.log(!addModalState);
					setaddModalState(!addModalState);
				}}
				variant='contained'
				color='primary'>
				<Add />
				{'   '} Add To Inventory
			</Button>
			<Lodal
				addModalState={addModalState}
				setaddModalState={setaddModalState}
			/>
		</Box>
	);
};
