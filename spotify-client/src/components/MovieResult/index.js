import React from 'react';
import { Card, Typography, Grid, Button } from '@material-ui/core';
import { withRouter } from "react-router";

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
  const classes = style();

  const handleSeeResultDetailClick = event => {
    history.push(`/movie/${imdbID}`);
  };

  return(
    <Card className={classes.cardContainer}>
      <Grid container spacing={2}>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster}/>
        </Grid>
        <Grid item>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button color="primary" variant="contained" onClick={handleSeeResultDetailClick}>More</Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withRouter(MovieResult);