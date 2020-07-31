import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./signup.css"
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

 const  SignUp = ()=> {
    const classes = useStyles();
   const navigate = useNavigate()
     

    return (
        <div  >
            <Grid  container className = "signIn"  >
              
            <Paper  className = "paper">
            <h1>Sign Up</h1> 
            <form className={classes.root} noValidate autoComplete="off">
            <TextField  label="First Name" variant="standard" type="text" name="firstName" />
            <TextField  label="Last Name" variant="standard" type="text" name="lastName" />
            <TextField  label="Email Address" variant="standard" type="email" name="email" />
            <TextField  label="Password" variant="standard" type="password" name="password" />
            <TextField  label="Re-password" variant="standard" type="password" name="re-password" />
            <Button type="submit" variant="contained" className = "loginBtn">Sign Up</Button> 
    </form>
            <p onClick = {()=> navigate("/signin")}>Login to your account</p>
            </Paper>
            
            </Grid>
        </div>
    )
}

export default SignUp