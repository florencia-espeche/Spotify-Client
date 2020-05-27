/**************Results*********************/
import React, { useEffect,useContext } from 'react';

import {LoginContext} from '../../App.js';

import { Typography, Button, Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

import { useSelector, useDispatch } from 'react-redux';
import { searchMovie } from '../../redux/actions/search';
import { movieResults,isSearchingLoading } from '../../redux/selectors';
import MovieResult from '../../components/MovieResult';
import Layout from '../../components/layout/index';
import styles from './style';

export default ({ history, location }) => {
	
	const {reg,login} = useContext(LoginContext);	
	
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchingLoading(state));
  const dispatch = useDispatch();
  const classes = styles();

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !movies) {

      dispatch(searchMovie({ movieName }));
    }
  });

  const handleGoToHomeClick = event => {
    history.push('/');
  };

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (<MovieResult key={index} {...value}/>));
    }else if(!isLoading){
      return(
        <div className={classes.noResultsContainer}>
          <Typography className={classes.noResultsText}>No results</Typography>
          <Button variant="contained" color="primary" onClick={handleGoToHomeClick}>Back to Home</Button>
        </div>
      )
    }else {
      return <CircularProgress size={100} color="primary"/>
    }
  };

  return (
    <Layout>
	<div><span style={{fontSize:20,fontWeight:'bold',position:'relative',left: 100, marginBottom:100}}> Enjoy!! </span><span style={{fontSize:40,fontWeight:'bold',position:'relative',left: 120, Bottom:200}}>{login}</span></div>
    <Container>
      {renderMovies()}
    </Container>
    </Layout>
  )
}