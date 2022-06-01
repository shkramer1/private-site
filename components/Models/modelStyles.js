import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root: {
        
        backgroundColor: 'black'
    },
    media: {
        
        paddingTop: '100%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        // display: 'flex',
        // justifyContent: 'space-between',
    },

    text: {
        fontFamily: 'Courier New'
    },

    background: {
        backgroundColor: 'black'
    },

    button: {
        border: '2px solid',
        borderColor: '#CBFF2F',
        color: '#CBFF2F',
        backgroundColor: 'black'

    }

}));