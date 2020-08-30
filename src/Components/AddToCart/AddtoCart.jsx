import React, {useContext} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import "./addtoCart.css"
import {ShoeContext} from "../Context/GlobalState"
const useStyles = makeStyles({
    font:{
      fontFamily: "Lato"

    
    },


  });
const AddToCart = ()=>{

    const classes = useStyles();
    const shoeContext = useContext(ShoeContext)
    const {cartState,cartDispatch} = shoeContext
    const deleteCart = (id) => {
      cartDispatch({type:"DELETE_CART",payload:id})
    }
    const incrementItem = (id)=>{
      cartDispatch({type: "ADD_QUANTITY",payload:id})
    }
    const decrementItem = (id)=>{
      cartDispatch({type: "MINUS_QUANTITY",payload:id})
    }
    const totalCost = cartState.reduce((prev,currentItem)=> prev + (currentItem.price * currentItem.quantity),0)
    const addItem = cartState.map((item,idx)=>{
      return (
        <div key = {idx}> 
        
               <Card className = "main-card">
                  <div className = "card-panel" >
                      <div className = "cart-img">
                     <img src={item.src} alt={item.title} width = "120px"/>
                     </div>
                     <div>
                     <Typography gutterBottom variant="h5" component="h2" className = {classes.font} >
                      {item.title}
                    </Typography>
                     <div className = "shoe-desc">        
                     <Typography gutterBottom variant="h5" component="h2"className = {classes.font} >
                      {item.price * item.quantity}$
                    </Typography>
                    <Button onClick = {()=>decrementItem(item._id)} >-</Button>
                    <Typography gutterBottom variant="h6" component="h2"className = {classes.font} >
                      {item.quantity}
                    </Typography>
                    <Button onClick = {()=>incrementItem(item._id)}  >+</Button>
                    <IconButton onClick = {()=>deleteCart(item._id)} style = {{color:"Black"}}><DeleteIcon /></IconButton>                    

                    </div>
                    <Typography variant="body2" color="textSecondary" component="p"  className = {classes.font}>
                       {item.desc.slice(0,100)}
                     
                     </Typography>

                     </div>
                      
                  </div>
                 
               </Card>
          
           </div>
      )
    })
    return(
        <div className = "cart">
          <Grid container>
          <Grid item >
            {cartState.length ? addItem : "No Items" }
            </Grid>
            <Grid item >
            <h2>{totalCost ? totalCost : 0}</h2>
            </Grid>
                
          </Grid>

        </div>
    )
}
export default AddToCart