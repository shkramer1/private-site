import React from 'react';
import { Paper, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Button, Divider } from '@material-ui/core';

import { Link } from 'react-router-dom';
import useStyles from './FooterStyles';



const Footer = () => {
let classes=useStyles();


  return (
    <>
    <Paper className={classes.background}>
        <Grid container className={classes.creatorLayout}> 
        <Grid item xs={4} sm={4} md={4} lg={4}>
<List >
<ListItem  divider>
        <Typography className={classes.text} variant='h6'>VX MODELS</Typography>
      
    </ListItem>
    <Divider className={classes.divider} />
    <ListItem >
        <Button target='_blank' component='a' href='https://opensea.io/collection/monks-of-crypto-v2'>
        <Typography className={classes.text} variant='subtitle1'>About</Typography>
      </Button>
    </ListItem>
</List>
</Grid>
   
        <Grid item xs={4} sm={4} md={4} lg={4}>
<List>
    <ListItem  divider>
        <Typography className={classes.text} variant='h6'>MIGRATION</Typography>
      
    </ListItem>
    <Divider className={classes.divider} />
    <ListItem  >
        <Button target='_blank' component='a' href='https://opensea.io/collection/monks-of-crypto-v2'>
            
        <Typography className={classes.text} variant='subtitle1'>Website</Typography> 
        </Button>
       
    
    </ListItem>
    <ListItem >
        <Button target='_blank' component='a' href='https://www.puzl.world/partners/cryptomonks/'>
            
        <Typography className={classes.text} variant='subtitle1'>Guide</Typography>
        </Button>
       
    
    </ListItem>
</List>
</Grid>

<Grid item xs={4} sm={4} md={4} lg={4}>
<List>
    <ListItem  divider>
        <Typography className={classes.text} variant='h6'>DOCUMENTS</Typography>
      
    </ListItem>
        <Divider className={classes.divider} />
    <ListItem  >
        <Button target='_blank' component='a' href='https://twitter.com/i/status/1478660810117468163'>
            
        <Typography className={classes.text} variant='subtitle1'>Crypto Monks Theme Song</Typography> 
        </Button>
       
    
    </ListItem>
    <ListItem >
        <Button target='_blank' component='a' href='https://gateway.pinata.cloud/ipfs/QmZtQ3KhtTKNgoDtknXsM2hi7taeR9rqojHHCUucfvR88K'>
            
        <Typography className={classes.text} variant='subtitle1'>GTA Crypto Monks (beta)</Typography>
        </Button>
       
    
    </ListItem>
    <ListItem >
        <Button target='_blank' component='a' href='https://gateway.pinata.cloud/ipfs/QmaTMZ7uVwTQqk6967grMzVnnp4z5dxDHEimoBgaHKwSJ4'>
            
        <Typography className={classes.text} variant='subtitle1'>Wweb3 Sprite Monks IPFS</Typography>
        </Button>
       
       
    </ListItem>
    <ListItem >
        <Button target='_blank' component='a' href='https://oncyber.io/monksofcrypto'>
            
        <Typography className={classes.text} variant='subtitle1'> 3D Monks Gallery (sample)
    </Typography>
        </Button>
       
    
    </ListItem>
   
</List>
</Grid>



        </Grid>
    </Paper>
    </>
  )
}

export default Footer;