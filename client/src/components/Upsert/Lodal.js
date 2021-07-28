import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ImageUploader from './ImageUploader'
import AddForm from './AddForm';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: "70%",
        height: "80%",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Lodal = ({ addModalState, setaddModalState }) => {
    const classes = useStyles();

    const handleClose = () => {
        setaddModalState(!addModalState);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={addModalState}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={addModalState}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Create Modal</h2>
                        <AddForm />

                    </div>


                </Fade>
            </Modal>
        </div>
    );
}

export default Lodal