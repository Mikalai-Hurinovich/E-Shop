import {makeStyles} from "@material-ui/core/styles";


export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        minHeight: '350px',

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 10px'
    },
    cardContent: {
        display: 'flex',
        // justifyContent: 'space-between'
    },
}));
