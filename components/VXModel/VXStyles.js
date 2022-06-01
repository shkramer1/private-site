import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    card: {
        backgroundColor: 'black',
       
        width: '100%',

    

    },

    popperText: {
fontFamily: 'Courier New'
    },

    box: {
        border: 'solid 3px',
        borderColor: '#CBFF2F',
        
    },

    popper: {
        fontFamily: 'Courier New',
        backgroundColor: 'black',
        color: '#CBFF2F',
        border: 'solid 4px',
        borderColor: '#CBFF2F',
      
    },

    border: {
       
  
      backgroundColor: 'black',
        // marginRight: theme.spacing(10),
        // marginLeft: theme.spacing(10),
        
        // marginBottom: theme.spacing(5),
      
    },

    canvas:  {
       
        verticalAlign: 'center',
        
       width: 'maxWidth',
       height: '500px'
       
       
      },

image: {
    height: '50%'
},

font: {
    color: 'black',
    fontFamily: 'Courier New', 
},

text: {
    color: '#CBFF2F',
    fontFamily: 'Courier New',
    backgroundColor: 'white',
opacity: 0.7,
  
   
}

}));