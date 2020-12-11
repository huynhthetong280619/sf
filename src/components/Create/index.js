import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create({updateProducts, lstProducts}) {
  const classes = useStyles();

  const [name, setName] = React.useState('')
  const [color, setColor] = React.useState('')
  const [nLevel, setnLevel] = React.useState('')


  const addProduct = () => {
      updateProducts([...lstProducts, {name, color, nLevel}])
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Name machine" variant="outlined" style={{width: "25%"}} placeholder="Name machine" onChange={(e) => setName(e.target.value)} />
      <TextField id="outlined-basic" label="Color machine" variant="outlined" style={{width: "25%"}} placeholder="Color machine" onChange={(e) => setColor(e.target.value)}/>
      <TextField id="outlined-basic" label="Nerd Level" variant="outlined" style={{width: "25%"}} placeholder="Nerd Level" onChange={(e) => setnLevel(e.target.value)}/>
      <Button variant="contained" color="primary" style={{height: 56}} onClick={() => addProduct()}>Create</Button>
    </form>
  );
}
