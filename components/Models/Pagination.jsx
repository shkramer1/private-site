import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Card, Grid } from '@material-ui/core';
import Product from './Product';


export default function Models ({products}) {
   console.log(products);
const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 20; 
      
        useEffect(() => {
          
          const endOffset = itemOffset + itemsPerPage;
          
          setCurrentItems(products.slice(itemOffset, endOffset));
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
         
          setPageCount(Math.ceil(200 / itemsPerPage));
          
          
        }, [itemOffset, itemsPerPage, products]);
      
    
        const handlePageClick = (event) => {
          const newOffset = (event.selected +1 * itemsPerPage) % products.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };
      
        return (
          <>
          <div>
          <Grid container justifyContent="center" spacing={5}>
          {currentItems.map((product) => (
            <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
          </Grid>
          </div>

          <Card>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
           
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
          </>
        );
      
  
};

