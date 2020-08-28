import React,{useState,useContext} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./signup.css"
import TextField from '@material-ui/core/TextField';
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button';
import {ShoeContext} from "../Context/GlobalState"
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    
    },
  }));

 const  SignUp = ()=> {
   const shoeContext = useContext(ShoeContext)
   const {userDispatch} = shoeContext
   const [signUpState,setSignUpState] = useState({firstName: "",lastName: "",email:"",password: "",})
    const classes = useStyles();
   const navigate = useNavigate()
     const onSignUpForm = (evt)=>{
      evt.preventDefault()
      if(signUpState.firstName!== "" &&
      signUpState.lastName!== "" &&
      signUpState.email!=="" &&
      signUpState.password !== ""
      ){
       userDispatch({type:"ADD_USER",payload:signUpState})
       navigate("/signin")
      }

             
     }

    return (
        <div  >
            <Grid  container className = "signIn"  >
              
            <Paper  className = "paper">
            <h1>Sign Up</h1> 
            <form onSubmit = {onSignUpForm} className={classes.root} noValidate autoComplete="off">
            <TextField  label="First Name" variant="standard" type="text" name="firstName"
            value = {signUpState.firstName}
            onChange = {(evt)=>setSignUpState({...signUpState,[evt.target.name]:evt.target.value})} />
            <TextField  label="Last Name" variant="standard" type="text" name="lastName"
            value = {signUpState.lastName}
            onChange = {(evt)=>setSignUpState({...signUpState,[evt.target.name]:evt.target.value})} />
            <TextField  label="Email Address" variant="standard" type="email" name="email"
            value = {signUpState.email}
            onChange = {(evt)=>setSignUpState({...signUpState,[evt.target.name]:evt.target.value})} />
            <TextField  label="Password" variant="standard" type="password" name="password"
            value = {signUpState.password}
            onChange = {(evt)=>setSignUpState({...signUpState,[evt.target.name]:evt.target.value})} />
            <Button type="submit" variant="contained" className = "loginBtn">Sign Up</Button> 
    </form>
            <p onClick = {()=> navigate("/signin")}>Login to your account</p>
            </Paper>
            
            </Grid>
        </div>
    )
}

export default SignUp