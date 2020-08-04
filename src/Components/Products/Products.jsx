import React,{useContext} from 'react'
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
import {Link} from "react-router-dom"
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
    const classes = useStyles();
     const {shoes} = useContext(ShoeContext)
    return (
        <div className = "grid">
            <Grid container spacing = {2} direction="row"
   >

             {shoes.map((shoe)=>{
                 console.log(shoe)
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
        <Button className = "more-info" color="primary">
          More Info
        </Button>
        </Link>

        <IconButton  >
        <AddShoppingCartIcon className = {classes.icon} 	/>
        </IconButton>
      </CardActions>
    </Card>
                      </Grid>
                     
                 )
             })}
             </Grid>
        </div>
    )
}

export default Products