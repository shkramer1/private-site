import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({

background: {
    backgroundColor: 'black',
   
    color: '#CBFF2F'
},

navBackground:{
    backgroundColor:  '#CBFF2F'
},

text: {
    fontFamily: 'Courier New',
    color: '#CBFF2F'
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

divider: {
    backgroundColor: '#CBFF2F'
},

label:{
    color:  'black',
    backgroundColor: '#CBFF2F'
},

box: {
    paddingBottom: '10px',
    paddingTop: '10px',
    backgroundColor: '#CBFF2F'
}

}))