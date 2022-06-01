
import React from 'react';

import { Typography, Paper, Grid, Card, CardContent, CardMedia, Link, Button, useMediaQuery, useTheme } from '@material-ui/core';

import { ArrowCircleRight } from '@mui/icons-material';

import monksText from '../../assets/monksText.PNG';
import monksPfp from '../../assets/theTeam.PNG';
import twitter from '../../assets/twitter.png';
import discord from '../../assets/discord.png';
import gtlfMonk from '../../assets/0002Monk.png';
import gtlfBanner from '../../assets/vxCollection.crdownload'


import useStyles from './HomeStyles';


const Home = () => {
    let classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    
  return (
    <>
    <Paper className= {classes.background}>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.background} align='center'>
                    <CardContent>
                        <CardMedia component='img' src={monksText} alt='monks text' height='100%' />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.text} align='center'>
                    <CardContent>
                        <Typography variant='h3' className={classes.header}>Hello fellow monks!</Typography>
                        <Typography variant='h5' className={classes.font}> VX project Description</Typography>
                        <Typography variant='h5' className={classes.signature}>-Monksofcrypto.ETH</Typography>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            <br />
            <Grid container className={classes.layout}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <Card className={classes.background} align='center'>
                <Link href='https://twitter.com/MonksofCrypto?s=20&t=FwAsmddAomdfDsIdwznXDQ' target='_blank'>
                <CardMedia component='img' src={twitter} alt='twitter logo w/ link' className={classes.social} />
                </Link>
                </Card>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Card  className={classes.background} align='center' id='about'>
                                    <Link href='https://t.co/XKjEtKoPfD' target='_blank'>
                <CardMedia component='img' src={discord} alt='discord logo w/ link' className={classes.social} />
                </Link>
                </Card>
                            </Grid>
                            </Grid>
           <br /> 
           <Grid container className={classes.creatorLayout} >
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card className={classes.text} align='center' >
                    <CardContent>
                        <CardMedia component='img' src={monksPfp} alt='crypto monk pfp' className={classes.image} />
                       
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card className={classes.text} align='center'>
                    <CardContent>
                        <Typography variant='h4' className={classes.creator}>A note from the creator: </Typography>
                        <Typography variant='h6' className={classes.bio} style={{paddingBottom: '5px'}}>Hello and welcome! These monks get really high and put on different outfits for no reason. Sometimes, they eat too many edibles and morph forms. 
                        It’s high monk cosplay, and its high monk parody PFP art. It’s satire. It’s laughable, wonky, and relatable.</Typography>
                        <Typography variant='h6' className={classes.bio}>
                            
                            I’m the only person making this. I really like to just smoke weed, listen to music, and create. This is a great release for me, 
                            and has changed my life. Most profit will go towards helping my family, 
                            community, and those around me. I say most, because if I want an oreo mcflurry from mcdonalds, Im getting one.</Typography>
                       
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

        <Grid container className={classes.creatorLayout}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.background}style={{paddingTop: '20px'}} id='vxcollection' >
                    <CardMedia component='video' src={gtlfBanner} alt='VX Collection text' height='400px' />
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card className={classes.background} align='center'>
                    <CardContent>
                    <Typography variant ='h5' className={classes.text} >
                       The VX collection only gets better!  Check out Monk in action!
                       
                        </Typography>
                        <ArrowCircleRight style={{color: '#CBFF2F', marginBottom: '20px'}}/>
                     <CardMedia component='img' src={gtlfMonk} alt='GTLF monk still image' className={classes.image} />
                       
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Card style={{border: 'solid 2px', borderColor: '#CBFF2F', marginRight: '-20px'}} className={classes.background}>
                    <CardContent>
                    <iframe allowFullScreen width="640" height="480" title='monk' loading="lazy" frameBorder="0" src="https://p3d.in/e/t43fN+shading,dl,help,share,ar,spin,link,border-hidden"></iframe>
                    </CardContent>
                </Card>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card align='center' style={{paddingBottom: '80px'}} className={classes.background}>
                <Button fullWidth className={classes.button}>
                    <Typography className={classes.font} variant='h5'>View All Models</Typography>
                    </Button>
                </Card>
                </Grid> */}
        </Grid>
    </Paper>
    </>
  )
}

export default Home;