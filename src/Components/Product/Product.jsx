import React,{useContext,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import {ShoeContext} from "../Context/GlobalState"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactModal from 'react-modal';
import "./product.css"
import {  toast } from 'react-toastify'

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
    },
    modalFont:{
      fontFamily: "Lato"
 
    }
    
})

 const  Product = ()=> {
    const classes = useStyles();
     const navigate = useNavigate()
     const {prodName} = useParams()
     const shoeData = useContext(ShoeContext)
     const {shoes,isAuthenticated,cartDispatch} = shoeData
     const shoeProd = shoes.filter((shoe)=> shoe.title === prodName)
     const [product] = shoeProd
     const [isModalOpen,isSetModalOpen] = useState(false)
     
     const addToCart = (shoeDetail)=>{
      cartDispatch({type:"ADD_CART",payload:shoeDetail})
      isSetModalOpen(false)
      toast.dark("Item Added!",{position: "bottom-right",
      autoClose: 3000,})
     } 
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
                         <Button className = "add-to" color="primary"
                         onClick = {()=>isAuthenticated ? addToCart(product)  : isSetModalOpen(true)}>
                         Add To Cart
                       </Button>
                                          
                </Grid>
                <Grid item  xs = {12} sm = {12} md={6} lg={6} xl = {6} >
                  <img src = {product.src} className = "productImg" alt={product.title}/>
                 </Grid>

            </Grid>
            <ReactModal className = "modal" isOpen = {isModalOpen} shouldCloseOnOverlayClick={true} style = {{overlay:{backgroundColor: "#9e9e9e",display:"flex",justifyContent:"center",alignItems:"center",opacity:"95%"}}}>
             <div style = {{display:"flex",flexDirection: "column",justifyContent:"center",alignItems:"center",height: "30vh"}}>
             <div style = {{display:"flex",flexDirection: "column",justifyContent:"center",alignItems:"center"}}>   
             <Typography gutterBottom variant="h4" component="h3" className={classes.modalFont}>
            Dear User!
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" className={classes.modalFont}>
            You need to log in first to add this item into cart....
          </Typography>
          <div style = {{display: "flex", flexDirection: "row",}}> 
          <Button className = "more-info" onClick = {()=>{navigate("/signin")}} >
          Click here to Login 
        </Button>
        <Button className = "more-info" style ={{marginLeft: "10px"}} onClick = {()=>{isSetModalOpen(false)}} >
          Close Modal 
        </Button>
        </div>
        </div>
        </div>
       </ReactModal>
        </div>
    )
}

export default Product