import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardMedia, CssBaseline, Grid, Pagination, Typography} from '@mui/material';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';


import { NavBar, Home, Footer, BottomNav,  Header, Products } from './components';
import Models from './components/Models/Pagination';



const App = () => {
    const [products, setProducts] = useState([]);
    const [productsTwo, setProductsTwo]= useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({
          limit: 200,
          
        });
        setProducts(data);
    },

    fetchProductsTwo = async () => {
      const { data } = await commerce.products.list({
        limit: 200,
        page: 2,
        
      });
      setProductsTwo(data);
  }
 
   
    useEffect(() => {
        fetchProducts();
        fetchProductsTwo();
       
    }, [])
 
  return (
    <>
    <Router>
    <CssBaseline />
        <main style={{backgroundColor: 'black'}}>
        
       
          <div id='container' ></div>
      <Header></Header>
        <NavBar></NavBar>
        <Routes>

            <Route exact path='/' element={<Home></Home>}></Route>
            <Route exact path='/models' element={<Products products={products} productsTwo={productsTwo} ></Products>}></Route>

            {/* <Route exact path='/models' element ={<Models products={products} productsTwo={productsTwo}></Models>}></Route> */}
          
           
        </Routes>
    </main>
    <footer>
        <Footer></Footer>
        <BottomNav></BottomNav>
    </footer>
    </Router>
    </>
  )
}

export default App