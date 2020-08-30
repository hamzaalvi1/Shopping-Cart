import React from 'react'
import "./Home.css"
import {useNavigate} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

 const  Home = ()=> {
 const navigate = useNavigate()
    return (
        <div className = "home">
            <div className = "main-text">
            <Typography gutterBottom variant="h4" component="h2"  >
             Upper Fashions
             </Typography>
             <Typography gutterBottom variant="h4" component="h3"  >
             Finest Shoes Collection
             </Typography>
             <Button className = "main" color="primary" onClick = {()=> navigate("/products")}>
              Go To Shop
            </Button>
       </div>
        </div>
    )
}

export default Home