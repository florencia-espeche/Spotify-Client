/*************Home****************************/
import React, { useState, useEffect, useContext,} from "react";
import {LoginContext} from '../../App.js';
import {
    Typography,
    TextField,
    Button,
    Container,
    Grid
} from "@material-ui/core";

import queryString from 'query-string';

import styles from "./style";
import Layout from '../../components/layout/index';

export default ({ history, location }) => {
	
	const {reg,login} = useContext(LoginContext);
	
    const [searchText, setSearchText] = useState("");
    const [name, setName] = useState("");
	
    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleSearchClick = event => {
        history.push(`/results?movieName=${searchText}`);
    };

    const classes = styles();
	
	useEffect(() => {
    const { userName } = queryString.parse(location.search);
    if (userName) {
	setName(userName);
    }
  });

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid className={classes.cardContainer}>
                    <Grid className={classes.titleGridContainer}>
                        <Grid>
                            <p className={classes.text}>Welcome<h2>{login} </h2>to</p>
                            <Typography className={classes.title}>Movies search</Typography>
                            <p className={classes.text}>Search your favorite movie, just enter a movie's name in the following search box and enjoy!</p>
                        </Grid>
                    </Grid>
                        <TextField
                            value={searchText}
                            placeholder="Type the name of your favorite movie"
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
                            Search
                </Button>
                </Grid>
            </Container>
        </Layout>
    );
};