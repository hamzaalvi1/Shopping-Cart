import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./signIn.css"
import TextField from '@material-ui/core/TextField';
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    
    },
  }));

 const  SignIn = ()=> {
    const classes = useStyles();
   const navigate = useNavigate()
     

    return (
        <div  >
            <Grid  container className = "signIn"  >
              
            <Paper  className = "paper">
            <h1>Login</h1> 
            <form className={classes.root} noValidate autoComplete="off">
            <TextField  label="Email Address" variant="standard" type="email" name="email" />
            <TextField  label="Password" variant="standard" type="password" name ="password" />
            <Button type="submit" variant="contained" className = "loginBtn">Login</Button> 
    </form>
            <p onClick = {()=> navigate("/signup")}>Create an account or Signup</p>
            </Paper>
            
            </Grid>
        </div>
    )
}

export default SignIn