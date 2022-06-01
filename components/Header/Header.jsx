import React from 'react';
import { Suspense, iframe } from "react";
import { CssBaseline, Grid, Card, CardMedia, Typography } from '@material-ui/core';

import VXBackdrop from '../VXModel/VXBackdrop';
import introText from '../../assets/introText.png';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Shadow, Stage, BakeShadows } from "@react-three/drei";
import Model from '../VXModel/animatedModel';
import background from '../../assets/backgroundTemple.png'
import textIntro from '../../assets/headerText.png';
import {useTheme, useMediaQuery} from '@material-ui/core'

import useStyles from '../VXModel/VXStyles';
import CompactPicker from '../VXModel/ColorPicker/CompactPicker';

import SimplePopper from './Popper';


const Header = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    let classes=useStyles();
  
    
  return (
      <>
   <CssBaseline />
<main >
<Grid container >
    {/* <Grid item xs={12} sm={12} md={7} lg={7}>
        <Card className={classes.text} align='center'>
            
            {/* <CardMedia component='img' src={introText} alt='vx models description' className={classes.image}/> */}
            {/* <Typography className={classes.font} variant='h2'>Monks of Crypto are now 3D Models!</Typography>
            
        </Card>
    </Grid>  */}
    <Grid item xs={12} sm={12} md={8} lg={8} >

   <Card className={classes.border} >
  
  
 <Canvas style={{backgroundImage: `url(${background})`, backgroundSize: '100%', height: '500px'}}  className={classes.canvas} shadows camera={{fov: 45, position: [0, 10, 340]}}>
 
       <OrbitControls   
       makeDefault
autoRotate
autoRotateSpeed={0.3}
maxPolarAngle={Math.PI / 2.3}
minPolarAngle={Math.PI / 2.3}
enableZoom
enablePan
enableRotate
/>
     
       <ambientLight intensity={0.03} />

       <directionalLight position={[-5, 5, 5]} receiveShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

       <Suspense fallback={null}>
       
       <Stage environment="city" intensity={1}>
      <Model />
        </Stage>
        <BakeShadows />
      
       
       </Suspense>

     </Canvas>


   </Card>

</Grid>
{isMobile ? ( <Grid item xs={12} sm={12} md={1} lg={1} style={{marginLeft: '-110px'}}>
  <SimplePopper />
  </Grid> 
  ) : (

  <Grid item xs={12} sm={12} md={3} lg={3}>
  <CardMedia component='img' src={textIntro} alt='Crypto monks in 3d' height='100%' style={{marginLeft: '25px', width: '350px', marginTop: '-20px'}} />
  </Grid>
  )}
</Grid>
</main>
</>
  )
};

export default Header; 



