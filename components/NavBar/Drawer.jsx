import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from './DrawerStyle';


function DrawerComponent() {
let classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
    <main style={{backgroundColor: 'black'}}>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className={classes.drawer}
      >
        <List className={classes.drawer}>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/models" className={classes.link}>VX Models</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={(e) => {e.preventDefault(); window.location.replace('/#vxcollection');}}>
            <ListItemText>
              <Link to="/home" className={classes.link}>VX Release: Coming Soon!</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=> window.open("https://opensea.io/collection/monks-of-crypto-v2", "_blank")}>
            <ListItemText>
              <Link to="/home" className={classes.link}>Migrated Monks on Opensea!</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=> window.open("https://www.puzl.world/partners/cryptomonks/", "_blank")}>
            <ListItemText>
              <Link to="/home" className={classes.link}>Migration Website</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=> window.open("https://linktr.ee/monksofcrypto", "_blank")} >
            <ListItemText>
              <Link to="/home" className={classes.link}>Documents</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=> window.open("https://twitter.com/MonksofCrypto?s=20&t=FwAsmddAomdfDsIdwznXDQ", "_blank")}>
            <ListItemText>
              <Link to="/home" className={classes.link}>Twitter</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={()=> window.open("https://t.co/XKjEtKoPfD", "_blank")}>
            <ListItemText>
              <Link to="/home" className={classes.link}>Discord</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={(e) => {e.preventDefault(); window.location.replace('/#about');}}>
            <ListItemText>
              <Link to="/about" className={classes.link}>About</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
  
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Menu className={classes.icon} />
      </IconButton>
      </main>
    </>
  );
}
export default DrawerComponent;
