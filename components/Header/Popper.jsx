import * as React from 'react';
import {Box, Popper, Grid, Paper, Typography, Fade, Button} from '@material-ui/core';
import useStyles from '../VXModel/VXStyles';

export default function SimplePopper() {
  let classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
 

  return (
     <Box >
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper style={{padding: '10px'}} className={classes.popper}>
              <Typography className={classes.popperText}>Use your cursor </Typography>
              <Typography className={classes.popperText}>to zoom in</Typography>
              <Typography className={classes.popperText}>and move the monk </Typography>
               <Typography className={classes.popperText}> around the screen!</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item>
          <Button style={{color: '#CBFF2F', fontFamily: 'Courier New', backgroundColor: 'black', border: 'solid 3px', borderColor: '#CBFF2F'}} onClick={handleClick('top-start')}>Controls</Button>
          
        </Grid>
        </Grid>
        </Box>
  );
}
