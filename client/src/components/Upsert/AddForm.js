import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageUploader from './ImageUploader';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormGroup from '@material-ui/core/FormGroup';
import { Add } from '@material-ui/icons';


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

  const [images, setImages] = useState([])
  const [itemName, setitemName] = useState()
  const [category, setCategory] = useState()
  const [itemCode, setitemCode] = useState()
  const [description, setDescription] = useState()
  const [stockValue, setstockValue] = useState()
  const [unit, setUnit] = useState('')
  const [date, setDate] = useState()
  const [stockWarning, setStockWarning] = useState(false)
  const [lowQuantity, setLowQuantity] = useState(0)
  const [purchasePrice, setPurchasePrice] = useState(0)
  const [gst, setGst] = useState(0)
  const [inclusive, setInclusive] = useState(false)

  const [errors, setErrors] = useState([])

  const validateFields = () => {
    let errorArray = []
    if (!itemName || itemName == "" || itemName && itemName.length === 0) {
      errorArray.push('itemName')
    } if (!category || category && category.length === 0) {
      errorArray.push('category')
    } if (!itemCode || itemCode && itemCode.length === 0) {
      errorArray.push('itemCode')
    } if (!description || description && description.length === 0) {
      errorArray.push('description')
    } if (!stockValue || stockValue === 0) {
      errorArray.push('stockValue')
    } if (!unit || unit && unit.length === 0) {
      errorArray.push('unit')
    } if (!date || date && date.length === 0) {
      errorArray.push('date')
    }

    setErrors(errorArray)
  }


  useEffect(() => {
    return () => {
      setErrors([])

    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ images, itemName, category, itemCode, description, stockValue, unit, date, stockWarning, lowQuantity, purchasePrice, gst, inclusive })
    // if (!name)
    validateFields()
    console.log(itemName)

  }

  return (
    <form className={`${classes.root}`} noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <hr />
          <h4>Pricing Details</h4>
          <hr />
          <Paper className={classes.paper}>
            <FormControl margin="normal" fullWidth="true">
              <ImageUploader setImages={setImages} />
            </FormControl>

            <FormControl margin="normal" fullWidth="true">
              <TextField error={errors.includes("itemName")} onChange={(e) => { setitemName(e.target.value) }} size="small" id="item-name" label="Item Name" variant="outlined" />
            </FormControl>

            <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                error={errors.includes("category")}
                labelId="category-label"
                id="category"
                // value={age}
                onChange={e => { setCategory(e.target.value) }}
                label="category"
                style={{ width: "80%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Panel"}>Panel</MenuItem>
                <MenuItem value={"Inverter"}>Inverter</MenuItem>
                <MenuItem value={"Wire"}>Wire</MenuItem>
              </Select>
            </FormControl>

            <FormControl margin="normal" fullWidth="true">
              <Grid container>
                <TextField error={errors.includes("itemCode")} onChange={(e) => { setitemCode(e.target.value) }} size="small" id="item-code" label="ItemCode" variant="outlined" />
              </Grid>
            </FormControl>
            <FormControl margin="normal" fullWidth="true">
              <TextField error={errors.includes("description")} onChange={(e) => { setDescription(e.target.value) }} size="small" id="item-description" label="Description" variant="outlined" />
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
                <InputLabel id="unit-label">Select Unit</InputLabel>
                <Select
                  labelId="unit-label"
                  id="unit"
                  label="Select Unit"
                  style={{ width: "80%" }}
                  onChange={(e) => { setUnit(e.target.value) }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"PCS"}>Pieces(PCS)</MenuItem>
                  <MenuItem value={"UNT"}>Units(UNT)</MenuItem>
                  <MenuItem value={"IN"}>Inch(IN)</MenuItem>
                  <MenuItem value={"NOS"}>Numbers(NOS)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl margin="normal" size="small" variant="outlined" className={classes.formControl}>
                <TextField onChange={(e) => { setstockValue(e.target.value) }} type="number" size="small" id="item-name" label="Opening Stock" variant="outlined" InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      {unit}
                    </InputAdornment>
                  ),
                  inputProps: {
                    min: 0
                  }
                }} />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl margin="normal">
            <TextField onChange={e => { setDate(e.target.value) }} defaultValue="2021-07-28" label="As of date" type="date" size="small" id="item-name" variant="outlined" />
          </FormControl>
          <br />

          <FormGroup row>

            <FormControlLabel
              control={
                <Switch
                  onChange={() => { setStockWarning(!stockWarning) }}
                  name="lowstock"
                  color="primary"
                />
              }
              label="Enable low stock warning"
            />
            {stockWarning ? (<FormControl margin="normal">
              <TextField InputProps={{
                inputProps: { min: 0 }
              }} onChange={e => { setLowQuantity(e.target.value) }} onChange={e => { setLowQuantity(e.target.value) }} label="Stock Warning at" type="number" size="small" id="purchase-price" variant="outlined" />
            </FormControl>) : null}
          </FormGroup>


          <hr />
          <h4>Pricing Details</h4>
          <hr />

          <FormGroup row>
            <FormControl margin="normal">
              <TextField InputProps={{
                inputProps: { min: 0 }
              }} onChange={e => { setPurchasePrice(e.target.value) }} label="Purchase Price" type="number" size="small" id="purchase-price" variant="outlined" />
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
            <InputLabel onChange={() => { setInclusive(!inclusive) }} id="gst-label">GST Tax Rate (%)</InputLabel>
            <Select
              labelId="gst-label"
              id="gst"
              label="GST Tax Rate (%)"
              onChange={e => { setGst(e.target.value) }}
              style={{ width: "50%" }}
            >
              <MenuItem value="none">
                <em>nonne</em>
              </MenuItem>
              <MenuItem value={"Exempted"}>Exempted</MenuItem>
              <MenuItem value={"5%"}>5%</MenuItem>
              <MenuItem value={"10%"}>10%</MenuItem>
              <MenuItem value={"18%"}>18%</MenuItem>
              <MenuItem value={"28%"}>28%</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <Button
        onClick={handleSubmit}
        type="submit"
        variant='contained'
        color='primary'>
        Add
        {'   '}
        <Add />
      </Button>
    </form >

  );
}