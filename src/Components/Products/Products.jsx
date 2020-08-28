import React,{useContext,useState} from 'react'
import {ShoeContext} from "../Context/GlobalState"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link,useNavigate} from "react-router-dom"
import ReactModal from 'react-modal';
import "./product.css"
const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 190,
    },
    font:{
      fontFamily: "Lato"

    
    },
    icon:{
      color: "#212121",

    }
    


  });
 const  Products = ()=> {
   const [isModalOpen,isSetModalOpen] = useState(false)
   

  const navigate = useNavigate()
    const classes = useStyles();
     const {shoes,isAuthenticated} = useContext(ShoeContext)
     console.log(isAuthenticated)
    return (
        <div className = "grid">
            <Grid container spacing = {2} direction="row"
   >

             {shoes.map((shoe)=>{
                 return(
                      <Grid item xs = {12} sm = {6} md = {4} lg={4} key = {shoe._id} >
                      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={shoe.src}
          title={shoe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.font}>
            {shoe.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
           {shoe.desc}
            </Typography>
            
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to = {`${shoe.title}`} > 
        <Button className = "more-info" >
          More Info
        </Button>
        </Link>

        <IconButton onClick = {()=>isAuthenticated ? isSetModalOpen(false): isSetModalOpen(true)} >
        <AddShoppingCartIcon className = {classes.icon}    	/>
        </IconButton>
      </CardActions>
    </Card>
                      </Grid>
                     
                 )
             })}
             </Grid>
             <ReactModal className = "modal" isOpen = {isModalOpen} shouldCloseOnOverlayClick={true} style = {{overlay:{backgroundColor: "#9e9e9e",display:"flex",justifyContent:"center",alignItems:"center",opacity:"95%"}}}>
             <div style = {{display:"flex",flexDirection: "column",justifyContent:"center",alignItems:"center",height: "30vh"}}>
             <div style = {{display:"flex",flexDirection: "column",justifyContent:"center",alignItems:"center"}}>   
             <Typography gutterBottom variant="h4" component="h3" className={classes.font}>
            Dear User!
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" className={classes.font}>
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

export default Products