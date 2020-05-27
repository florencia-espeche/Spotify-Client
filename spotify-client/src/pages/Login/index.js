/*****************Login******************************/
import React, { useState, useContext} from "react";
import {LoginContext} from '../../App.js';
import {
    Typography,
    TextField,
    Button,
    Container,
    Grid
} from "@material-ui/core";

import styles from "./style";
import Layout from '../../components/layout/index';

export default ({ history }) => {
	
	const {reg,login} = useContext(LoginContext);

    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleSearchClick = event => {
		if(searchText){
			reg(searchText);
			history.push('/home');
    }
	}

    const classes = styles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid className={classes.cardContainer}>
                    <Grid className={classes.titleGridContainer}>
                        <Grid>
                            <p className={classes.text}>Welcome to</p>
                            <Typography className={classes.title}>Movies search</Typography>
                            <p className={classes.text}>Enter your name in the following box</p>
                        </Grid>
                    </Grid>
                        <TextField
                            value={searchText}
                            placeholder="Type your name"
                            onChange={handleSearchTextChange}
                            margin="normal"
                            className={classes.textFieldSearch}
                        />
                        <Button
                            onClick={handleSearchClick}
                            variant="inline"
                            color="primary"
                            className={classes.searchButton}
                            size="large"
                        >
                            Login
                </Button>
                </Grid>
            </Container>
        </Layout>
    );
};