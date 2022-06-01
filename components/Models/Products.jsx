import React, {useState} from "react";
import { Card, Grid } from "@material-ui/core";

import Product from './Product'
import useStyles from "./productsStyles";

import vxcollection from '../../assets/vxCollection.crdownload';
import GLTFModels from "./GLTFModels";

import ReactPaginate from "react-paginate";



const Products = ({ products, productsTwo }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

const handlePageClicked =(data)=>{
console.log(data.selected)

}

  return (
    <React.Fragment>
      <header align='center'> 
       <video src={vxcollection} alt='vx collection header' height='300px'/>
      </header>
      <main className={classes.content}>
      
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={5}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
         
          {productsTwo.map((product) => (
            <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
          <Grid item  xs={12} sm={12} md={12} lg={12}>
          {/* <div>
            <Card>
            <ReactPaginate
  pageCount={10}
  
  onPageChange={handlePageClicked}
  containerClassName={'pagination justify-content-center'}
  pageClassName={'page-item'}
  pageLinkClassName={'page-link'}
  previousClassName={'page-item'}
  previousLinkClassName={'page-link'}
  nextClassName={'page-item'}
  nextLinkClassName={'page-link'}
  breakClassName={'page-item'}
  breakLinkClassName={'page-link'}
  activeClassName={'active'}
  

            />
            </Card>
          </div> */}
          </Grid>
        </Grid>
      </main>
    
    </React.Fragment>
  );
};

export default Products;