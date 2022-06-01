import React from 'react';

import { BottomNavigation, BottomNavigationAction , Box, Paper} from '@material-ui/core';

import discord from '../../assets/discordNav.png';
import twitter from '../../assets/twitterNav.png';
import linktree from '../../assets/linktree.png';

import useStyles from './FooterStyles';


const BottomNav = () => {
  let classes = useStyles();
  
  return (
    <>
  
    <div  align='center' className={classes.navBackground}>
    <Paper  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <Box align='center' className={classes.box}>
      <BottomNavigation
    style={{backgroundColor:'#CBFF2F'}}
      align='center'
        showLabels
        
      >
        <BottomNavigationAction className={classes.label} label='Twitter'
         icon={<img src={twitter} alt='twitter' height='50px' />}
         href="https://twitter.com/MonksofCrypto?s=20&t=FwAsmddAomdfDsIdwznXDQ"
         target="_blank"
         />
        <BottomNavigationAction className={classes.label} label='Discord' icon={<img src={discord} alt='discord' height='50px' />} 
        href='https://t.co/XKjEtKoPfD' target='_blank'
        />
        <BottomNavigationAction className={classes.label} label='Linktree' icon={<img src={linktree} alt='linktree' height='50px' />} 
        href='https://linktr.ee/monksofcrypto' target='_blank'
        />
       
      </BottomNavigation>
    </Box>
    </Paper>
   
    </div>

    </>
  )
}

export default BottomNav;