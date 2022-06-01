import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    card: {
        backgroundColor: 'black',
        height: '100%',
        width: '100%',

    

    },

    box: {
        border: 'solid 3px',
        borderColor: '#CBFF2F',
        
    },

    border: {
        border: 'solid 3px',
        borderColor: '#CBFF2F',
        height: '500px',
        marginRight: theme.spacing(10),
        marginLeft: theme.spacing(10)
    },

    canvas:  {
        height: '500px',
        verticalAlign: 'center',
        position: 'absolute',
        width: 'maxWidth',
        
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
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3)
},

size: {
    height: '200px',
    width: '200px'
}

}));