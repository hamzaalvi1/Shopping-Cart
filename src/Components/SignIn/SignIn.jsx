import React, {useContext,useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./signIn.css"
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

 const  SignIn = ()=> {
  const shoeContext = useContext(ShoeContext)
  let {isAuthenticated,isLogIn} = shoeContext  
console.log(shoeContext)
  const [signInData,setSignInData] = useState({email: "",password: ""})
  const onSignInSubmit = (evt)=>{
   evt.preventDefault()
   if(signInData.email!== "" && signInData.password!== ""){
     isAuthenticated = true
     navigate("/products")
  }
  }
    const classes = useStyles();
   const navigate = useNavigate()
    return (
        <div>
            <Grid  container className = "signIn"  >
              
            <Paper  className = "paper">
            <h1>Login</h1> 
            <form onSubmit = {(evt)=>onSignInSubmit(evt) } className={classes.root} noValidate autoComplete="off">
            <TextField  label="Email Address" variant="standard" type="email" name="email"
             value = {signInData.email} onChange = {(evt)=> setSignInData({...signInData,[evt.target.name]:evt.target.value})} />
            <TextField  label="Password" variant="standard" type="password"
            onChange = {(evt)=> setSignInData({...signInData,[evt.target.name]:evt.target.value})}
            name ="password" value = {signInData.password} />
            <Button type="submit" variant="contained" className = "loginBtn">Login</Button> 
    </form>
            <p onClick = {()=> navigate("/signup")}>Create an account or Signup</p>
            </Paper>
            
            </Grid>
        </div>
    )
}

export default SignIn