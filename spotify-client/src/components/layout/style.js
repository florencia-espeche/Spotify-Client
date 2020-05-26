import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    header: {
        height: '15vh',
        ...centeredStyleObj
    },
    footer: {
        height: '15vh',
        ...centeredStyleObj
    },
    text: {
        fontFamily: "Roboto, sans-serif",
        fontSize: '1rem'
    },
    icon: {
        fontSize: '4rem',
        margin: '2rem'
    }
});