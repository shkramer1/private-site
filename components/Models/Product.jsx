import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import GLTFModels from "./GLTFModels";

import useStyles from "./modelStyles";

const Product = ({ product }) => {
  const classes = useStyles();
 let onMonkClicked=()=>{
    let monkLink = product.thank_you_url; 
    
    // window.open(product.description, "_blank")
    console.log(monkLink);
      console.log(product);
    };


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={Product.name}
      />
      <CardContent align='center'>
        <div  align='center'>
        
         
        
        <Button fullWidth variant='contained' disableElevation align='center' className={classes.button} onClick={()=> window.open(product.thank_you_url, "_blank")}>
         <Typography align='center' variant="h5" gutterBottom className={classes.text}>
            {product.name}
          </Typography>
        </Button>
        </div>
       
      </CardContent>
     
    </Card>
  );
};

export default Product;
