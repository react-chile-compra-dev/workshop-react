import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
   root: {
     maxWidth: 345,
   },
   media: {
     height: 140,
   },
 });

 const Product = ({product,products, cart, setCart}) => {

    const classes = useStyles();

    const {id, name, price} = product


    const addCart = (id) =>{
       const product = products.filter(product => product.id === id)[0];

       setCart([
          ...cart,
          product
       ]);

    }

    const deleteProduct = (id) =>{
      const products = cart.filter(product => product.id !== id);

      setCart(products);
    }

 return ( 
   <Card className={classes.root}>
   <CardActionArea>
   <CardMedia
       className={classes.media}
       image="https://http2.mlstatic.com/geomembrana-hdpe-tuberia-fitting-y-arriendo-de-equipos-tf-D_NQ_NP_955771-MLC25529646381_042017-F.jpg"
       title="Contemplative Reptile"
   />
   <CardContent>
       <Typography gutterBottom variant="h5" component="h2">
       {name}
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
       {price}
       </Typography>
   </CardContent>
   </CardActionArea>
<CardActions>
{products
    ?
       (
       <Button
           type ="button"
           onClick ={ () => addCart(id)}
       >Comprar</Button>
       )
    :
       (
       <Button
           type ="button"
           onClick ={() => deleteProduct(id)}
       >eliminar</Button>
       )
   }
</CardActions>
</Card>
   
   );
 }
  
 export default Product;