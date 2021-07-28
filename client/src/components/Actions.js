import { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { Delete, Add } from '@material-ui/icons';
import Lodal from './Upsert/Lodal';

export const Actions = () => {
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
			<Button color='primary'>Show Low Stock</Button>
			<Button variant='outlined' disabled>
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
