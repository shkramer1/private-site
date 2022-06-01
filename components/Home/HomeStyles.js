import { makeStyles } from "@material-ui/core/styles";

export default makeStyles ((theme) =>({

background: {
    backgroundColor: 'black'
},

primary: {
    color: 'grey'
},

text: {
    color: '#CBFF2F',
    backgroundColor: 'black',
    fontFamily: 'Courier New'
  

},

font: {
    fontFamily: 'Courier New',
},

header: {
    fontFamily: 'Courier New',
    marginBottom: '50px'
},

signature: {
    fontFamily: 'Courier New',
    marginTop: '50px'
},

creator: {
    fontFamily: 'Courier New',
    
   paddingBottom: '5px',
    fontWeight: 'bold'
},

bio: {
    fontFamily: 'Courier New',
   
    
},

image: {
    height: '400px',
    width: '400px'
},

social:{
    height: '300px',
    width: '300px',
    
},

layout: {

    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
   

    [theme.breakpoints.up(800 + theme.spacing(1))]: {
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
},

creatorLayout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
   

    [theme.breakpoints.up(1100 + theme.spacing(3))]: {
        width: 1300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
},

button: {
    fontFamily: 'Courier New',
    color: '#CBFF2F',
    border: 'solid 5px',
    borderColor: '#CBFF2F',
    width: 'fullWidth'
}

}));