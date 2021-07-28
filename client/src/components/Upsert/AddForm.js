// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageUploader from './ImageUploader';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//     display: "flex",
//     flexWrap: "wrap"
//   },
// }));

// const Add = () => {
//   const classes = useStyles();

//   return (
// <form className={`${classes.root} add-form`} noValidate autoComplete="off">
//       <div style={{ flexGrow: "1", maxWidth: "50%" }} >
//         <header>
//           General Details
//         </header>
//         <ImageUploader
//           onFileUpload={files => {
//             console.log(files);
//           }}
//         />
//         <TextField fullWidth="true" size="small" id="outlined-basic" label="Outlined" variant="outlined" />
//       </div>
//       <div style={{ flexGrow: "1", maxWidth: "50%" }} >

//         <header>
//           Stock Details
//         </header>
//         <TextField
//           id="filled-multiline-flexible"
//           label="Multiline"
//           multiline
//           maxRows={4}
//           variant="filled"
//         />

//       </div>
//     </form>
//   );

// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageUploader from './ImageUploader';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    width: "100%",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <form className={`${classes.root}`} noValidate autoComplete="off">
      <Grid container spacing={3}>

        <Grid item sm={12} md={6}>
          <hr />
          <h4>Pricing Details</h4>
          <hr />
          <Paper className={classes.paper}>
            <FormControl margin="normal" fullWidth="true">
              <ImageUploader />
            </FormControl>

            <FormControl margin="normal" fullWidth="true">
              <TextField size="small" id="item-name" label="Outlined" variant="outlined" />
            </FormControl>

            <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
              <Grid container>
                <InputLabel id="category-label">Category</InputLabel>
                <Grid item xs={12}>
                  <Select
                    labelId="category-label"
                    id="category"
                    // value={age}
                    // onChange={handleChange}
                    label="Age"
                    style={{ width: "80%" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <Button
                    startIcon={<AddIcon />}
                    style={{ width: "20%" }}
                  >
                  </Button>
                </Grid>
              </Grid>
            </FormControl>

            <FormControl margin="normal" fullWidth="true">
              <Grid container>
                <TextField size="small" id="item-name" label="ItemCode" variant="outlined" />
              </Grid>
            </FormControl>
            <FormControl margin="normal" fullWidth="true">
              <TextField size="small" id="item-name" label="Description" variant="outlined" />
            </FormControl>
          </Paper>
        </Grid>

        <Grid item sm={12} md={6}>
          <hr />
          <h4>Stock Details</h4>
          <hr />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
                <InputLabel id="unit-label">Unit</InputLabel>
                <Select
                  labelId="unit-label"
                  id="unit"
                  label="Unit"
                  style={{ width: "80%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
                <TextField type="number" size="small" id="item-name" label="Opening Stock" variant="outlined" />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl margin="normal">
            <TextField defaultValue="2021-07-28" label="As of date" type="date" size="small" id="item-name" variant="outlined" />
          </FormControl>
          <br />

          <FormControlLabel
            control={
              <Switch
                name="lowstock"
                color="primary"
              />
            }
            label="Enable low stock warning"
          />
          <hr />
          <h4>Pricing Details</h4>
          <hr />

          <FormGroup row>
            <FormControl margin="normal">
              <TextField defaultValue="2021-07-28" label="Purchase Price" type="number" size="small" id="purchase-price" variant="outlined" />
            </FormControl>
            <FormControlLabel
              style={{ marginLeft: "20px" }}
              control={
                <Switch
                  name="Inclusive of tax"
                  color="primary"
                />
              }
              label="Inclusive of tax"
            />
          </FormGroup>

          <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
            <InputLabel id="gst-label">GST Tax Rate (%)</InputLabel>
            <Select
              labelId="gst-label"
              id="gst"
              label="GST Tax Rate (%)"
              style={{ width: "50%" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>


        </Grid>
      </Grid>
    </form >

  );
}