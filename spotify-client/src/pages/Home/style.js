
import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '70vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        flexDirection: 'column',
        height: 200,
        ...centeredStyleObj
    },
    title: {
        fontFamily: "Roboto, sans-serif",
        fontSize: '3rem'
    },
    text: {
        fontFamily: "Roboto, sans-serif",
        fontSize: '1rem'
    },
    titleGridContainer: {
        ...centeredStyleObj
    },
    textFieldSearch: {
        width: '90%'
    },
    searchButton: {
        marginLeft: '.5rem'
    },
    progressContainer: {
        marginLeft: '.5rem'
    }
});