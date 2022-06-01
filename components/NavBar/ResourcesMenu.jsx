import * as React from 'react';

import {Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

import { useNavigate } from 'react-router-dom';

import document from '../../assets/documents.png';

import useStyles from './NavBarStyles';


export default function ResourcesMenu() {
  let classes = useStyles();
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

 
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.menu}
        >
          <img src={document} alt='documents button' height='75px' />
          {/* <ExpandMore /> */}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                   
                    <MenuItem className={classes.font} onClick={()=> window.open("https://oncyber.io/monksofcrypto", "_blank")}>3D Monks Gallery (sample) </MenuItem>
                    <MenuItem className={classes.font} onClick={()=> window.open("https://gateway.pinata.cloud/ipfs/QmZtQ3KhtTKNgoDtknXsM2hi7taeR9rqojHHCUucfvR88K", "_blank")}>GTA Crypto Monks (Beta)</MenuItem>
                    <MenuItem className={classes.font} onClick={()=> window.open("https://gateway.pinata.cloud/ipfs/QmaTMZ7uVwTQqk6967grMzVnnp4z5dxDHEimoBgaHKwSJ4", "_blank")}>Wweb3 Sprite Monks IPFS</MenuItem>
                    <MenuItem className={classes.font} onClick={()=> window.open("https://twitter.com/MonksofCrypto?s=20&t=FwAsmddAomdfDsIdwznXDQ", "_blank")}>Twitter</MenuItem>
                    <MenuItem className={classes.font} onClick={()=> window.open("https://t.co/XKjEtKoPfD", "_blank")}>Discord</MenuItem>
                     <MenuItem className={classes.font} onClick={()=> window.open("https://linktr.ee/monksofcrypto", "_blank")}>Linktree</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    
  );
}