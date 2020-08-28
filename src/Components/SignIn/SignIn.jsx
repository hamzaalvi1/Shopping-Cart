import React, {useContext,useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "./signIn.css"
import TextField from '@material-ui/core/TextField';
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button';
import {ShoeContext} from "../Context/GlobalState"
import ReactModal from 'react-modal';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    
    },
  }));

 const  SignIn = ()=> {
  const [isModalOpen,isSetModalOpen] = useState(false)

  const shoeContext = useContext(ShoeContext)
  let {isAuthenticated,userState} = shoeContext  
  const [signInData,setSignInData] = useState({email: "",password: ""})
  const onSignInSubmit = (evt)=>{
   evt.preventDefault()
   if(signInData.email!== "" && signInData.password!== ""){
     isAuthenticated = !isAuthenticated;
     const users = userState.filter((user)=>{
      return user.email === signInData.email
     })
     if(users.length){
      navigate("/products")
     } 
     else{
      isSetModalOpen(true)
     }
     setSignInData({email: "",password:""})
     
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
            <ReactModal isOpen = {isModalOpen} shouldCloseOnOverlayClick={true} className = "modal" style = {{overlay:{backgroundColor: "grey"}}}>
             <div style = {{display:"flex",flexDirection: "column",justifyContent:"center",alignItems:"center"}}>   
             <Typography gutterBottom variant="h3" component="h2" className={classes.font}>
            Dear User!
          </Typography>
          <Typography gutterBottom variant="h4" component="h2" className={classes.font}>
            You need to SignUp first to add this item into cart....
          </Typography>
          <div style = {{display: "flex", flexDirection: "row",}}> 
          <Button className = "more-info" onClick = {()=>{navigate("/signup")}} >
          Click here to Login 
        </Button>
        <Button className = "more-info" style ={{marginLeft: "10px"}} onClick = {()=>{isSetModalOpen(false)}} >
          Close Modal 
        </Button>
        </div>
        </div>
       </ReactModal>

        </div>
    )
}

export default SignIn