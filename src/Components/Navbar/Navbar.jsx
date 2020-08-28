import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./Navbar.css"
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 2,
      justifyContent: "space-between",
      fontFamily: "Great Vibes",
      fontSize: "32px",
      cursor: "pointer"
    },
    main:{
      backgroundColor: "#212121"
    },
    font:{
     fontFamily: "Lato"
    },
    icon:{
      color : "White"
    }
  }));  

 const  Navbar = ()=> {
   const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className = {classes.main}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Upper Fashions
          </Typography>
          <Link to = "/"> 
          <Button color="inherit" className = {classes.font}>Home</Button>
          </Link>
          <Link to = "products"> 
          <Button color="inherit" className = {classes.font}>Products</Button>
          </Link>
          <Link to = "signin"> 
          <Button color="inherit" className = {classes.font}>Login</Button>
          </Link>
          <IconButton >
            <Badge badgeContent = {0} color = "secondary">
            <Link to = "addToCart">
            <ShoppingCartIcon className = {classes.icon}/>
            </Link>     
            </Badge> 
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar