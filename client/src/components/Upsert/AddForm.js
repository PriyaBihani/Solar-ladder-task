import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ImageUploader from './ImageUploader';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    display: "flex",
    flexWrap: "wrap"
  },
}));

const Add = () => {
  const classes = useStyles();

  return (
    <form className={`${classes.root} add-form`} noValidate autoComplete="off">
      <div style={{ flexGrow: "1", maxWidth: "50%" }} >
        <header>
          General Details
        </header>
        <ImageUploader
          onFileUpload={files => {
            console.log(files);
          }}
        />
        <TextField fullWidth="true" size="small" id="outlined-basic" label="Outlined" variant="outlined" />
      </div>
      <div style={{ flexGrow: "1", maxWidth: "50%" }} >

        <header>
          Stock Details
        </header>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />

      </div>
    </form>
  );

}

export default Add
