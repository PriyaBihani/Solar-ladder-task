import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		width: '20%',
		height: '60%',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(0, 4, 3),
	},
}));

const AdjustStock = ({ adjustStockModalState, setAdjustStockModalState }) => {
	const classes = useStyles();

	const handleClose = () => {
		setAdjustStockModalState(!adjustStockModalState);
	};

	return (
		<div>
			<Modal
				className={classes.modal}
				open={adjustStockModalState}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={adjustStockModalState}>
					<div className={classes.paper}>
						<h2>Adjust Stock Quantity</h2>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default AdjustStock;
