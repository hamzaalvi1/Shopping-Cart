import React,{useContext} from 'react'
import {useParams} from "react-router-dom"
import {ShoeContext} from "../Context/GlobalState"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    font:{
      fontFamily: "Lato"
        },
       marginPadding01:{
         margin: "10px",
         padding: "10px",
         fontFamily: "Lato",
         fontSize: "45px"
       },
       marginPadding02:{
        margin: "05px",
        padding: "10px",
        fontFamily: "Lato",
        color: "black",
        fontSize: "22px" ,
        textAlign:"justify"
    } 
    
})

 const  Product = ()=> {
    const classes = useStyles();
     const {prodName} = useParams()
     const shoeData = useContext(ShoeContext)
     const {shoes} = shoeData
     const shoeProd = shoes.filter((shoe)=> shoe.title === prodName)
     const [product] = shoeProd
     console.log(product)

     return (
        <div className = "mainGrid">
            <Grid container spacing = {1} >
                <Grid item  xs = {12} sm = {12} md={6} lg={6} xl = {6} m = {2}>
                  <Typography gutterBottom variant="h4" component="h2"  className={classes.marginPadding01 }>
                      {product.title}
                      </Typography> 
                      <Typography variant="body1" color="textSecondary" component="p" className={classes.marginPadding02 }>
                      {product.desc}{product.desc}
                     </Typography>  
                     <Typography gutterBottom variant="h5" component="h2" className={classes.marginPadding02}>
                       Price: {product.price}
                      </Typography>
                      
                        <Typography variant="h5" component="h2" className={classes.marginPadding02}> 
                            Available Colors: 
                             {product.colors.map((color)=>{
                           return(
                               <span  className = "colorCircle"key = {color} style= {{backgroundColor: color}}> 
                                   
                               </span>
                           ) 
                        })}  
                        </Typography>
                        <Button className = "add-to" color="primary">
                         Add To Cart
                       </Button>
                                          
                </Grid>
                <Grid item  xs = {12} sm = {12} md={6} lg={6} xl = {6} >
                  <img src = {product.src} className = "productImg" alt={product.title}/>
                 </Grid>

            </Grid>
        </div>
    )
}

export default Product