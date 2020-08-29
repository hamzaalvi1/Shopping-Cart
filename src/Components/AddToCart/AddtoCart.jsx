import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "./addtoCart.css"
import image from "../../img2.jpg"

const useStyles = makeStyles({
    font:{
      fontFamily: "Lato"

    
    },


  });
const AddToCart = ()=>{
    const classes = useStyles();

    return(
        <div className = "cart">
          <Grid container>
           <Grid item >
               <Card className = "main-card">
                  <div className = "card-panel" >
                      <div className = "cart-img">
                     <img src={image} alt="image" width = "120px"/>
                     </div>
                     <div>
                     <Typography gutterBottom variant="h5" component="h2" className = {classes.font} >
                      Air Bullet Snickers
                    </Typography>
                     <div className = "shoe-desc">        
                     <Typography gutterBottom variant="h5" component="h2"className = {classes.font} >
                      $100
                    </Typography>
                    <Button>+</Button>
                    <Typography gutterBottom variant="h6" component="h2"className = {classes.font} >
                      1
                    </Typography>
                    <Button>-</Button>
                                         
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p"  className = {classes.font}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ex!
                     </Typography>
                     </div>
                      
                  </div>
                 
               </Card>
           </Grid>
           <Grid item >
               Nice meeing you
           </Grid>
          </Grid>

        </div>
    )
}
export default AddToCart