import React from 'react';
import { Grid } from "@material-ui/core";

import styles from "./style";
import { MovieIcon } from '../../icons';

const Layout = ({ children }) => {
    const classes = styles();

    return (
        <>
            <Grid className={classes.header}>
                <MovieIcon className={classes.icon}/>
            </Grid>
            {children}
            <Grid className={classes.footer}>
                <p className={classes.text}>Florencia Espeche - 2020</p>
            </Grid>
        </>
    )
}

export default Layout;

