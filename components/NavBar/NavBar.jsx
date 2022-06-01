import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box, Grid, useTheme, useMediaQuery, Button } from '@material-ui/core';

import { Link, NavLink } from 'react-router-dom';

import ResourcesMenu from './ResourcesMenu';
import NFTMenu from './NFTMenu';
import ProjectsMenu from './ProjectsMenu';
import Drawer from './Drawer';

import home from '../../assets/home.png';
import vxmodels from '../../assets/vxmodels.png';

import vxrelease from '../../assets/vxrelease.png';

import about from '../../assets/about.png';

import useStyles from './NavBarStyles';

import { useNavigate } from 'react-router-dom';


const NavBar = ({ totalItems }) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let navigate=useNavigate();

  const onVXModelsClicked =()=>{
    let path = `/models`; 
    navigate(path);
  }
  return (
    <>
      
        <AppBar position="sticky" className={classes.appBar} >
          <Toolbar align='center' className={classes.toolbar}>
          
<NavLink to="/">
   
              <img src={home} alt="home button" height="80px" className={classes.image}  />
            </NavLink>
              {isMobile ? (
          <Drawer />
        ) : (
         
       <Toolbar>
          
          <Button onClick={onVXModelsClicked} >      
       <img src={vxmodels} alt='vx models button' height='75px' />
       </Button>
       <Button onClick={(e) => {e.preventDefault(); window.location.replace('/#vxcollection');}}>
       <img src={vxrelease} alt='vx release button' height='75px' />
      </Button>
       
        <NFTMenu ></NFTMenu>
        <ProjectsMenu></ProjectsMenu>
       <ResourcesMenu></ResourcesMenu>
       <Button onClick={(e) => {e.preventDefault(); window.location.replace('/#about');}}>
       <img src={about} alt='about button' height = '75px' />
      </Button>
       

    </Toolbar>

             )}
           

           
     
          </Toolbar>
        </AppBar>
      
    </>
  );
};

export default NavBar;