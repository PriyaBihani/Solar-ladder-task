import { Box, Button } from '@material-ui/core';
import { Delete, Add } from '@material-ui/icons';

export const Actions = () => {
	return (
		<Box
			component='div'
			mt={5}
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}>
			<Button color='primary'>Show Low Stock</Button>
			<Button variant='outlined' disabled>
				<Delete />
				{'  '} Delete Selected
			</Button>
			<Button variant='contained' color='primary'>
				<Add />
				{'   '} Add To Inventory
			</Button>
		</Box>
	);
};
