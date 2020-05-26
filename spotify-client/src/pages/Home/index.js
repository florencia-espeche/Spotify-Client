
import React, { useState } from "react";
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
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
    };

    const handleSearchClick = event => {
        history.push(`/results?movieName=${searchText}`);
    };

    const classes = styles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid className={classes.cardContainer}>
                    <Grid className={classes.titleGridContainer}>
                        <Grid>
                            <p className={classes.text}>Welcome to</p>
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