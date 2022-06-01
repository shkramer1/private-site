import * as React from 'react';
import PropTypes from 'prop-types';

import {Button, Dialog, Typography, Card, Box} from '@material-ui/core';

import {Person, Add} from '@material-ui/icons';


import vxPreview from '../../assets/vxPreview.png';

import useStyles from './VXStyles';




function SimpleDialog(props) {
    let classes=useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
        <Box className={classes.box} align='center'>
        
     <Typography variant='h4' align='center' className={classes.font}>Check out this awesome VX model and its 3D aspects!!</Typography>
     <Typography variant='h4' align='center' className={classes.font}>You can zoom in, rotate, and move him around the screen!</Typography>
     
    
    
     </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  
};

export default function VXBackdrop() {
    let classes=useStyles();
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
   
  };

  return (
    <div align='center'>
        <Card className={classes.card} align='center'>

      <Button align='center' variant="outlined" onClick={handleClickOpen} style={{color: 'white'}}>
        <img src={vxPreview} alt='click here to see 3D monk' />
      </Button>
      <SimpleDialog
       
        open={open}
        onClose={handleClose}
      />
      </Card>
    </div>
  );
}
