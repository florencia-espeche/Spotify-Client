/****Resultdetails***/

import React, { useEffect,useContext} from 'react';

import {LoginContext} from '../../App.js';

import { get } from 'lodash';
import { Container, Typography, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieById } from '../../redux/actions/search';
import { movieResult as movieResultSelector } from '../../redux/selectors';
import Layout from '../../components/layout/index';

export default ({ match }) => {
	
	const {reg,login} = useContext(LoginContext);	
	
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    useEffect(() => {
        const movieId = get(match, 'params.movieId');
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }));
        }
    });


    if (!movieResult) {
        return <CircularProgress size={50} color="primary" />;
    }

    return (
        <Layout>
		<div><span style={{fontSize:20,fontWeight:'bold',position:'relative',left: 100, marginBottom:100}}> Enjoy!! </span><span style={{fontSize:20,fontWeight:'bold',position:'relative',left: 100, marginBottom:100}}>{login}</span></div>
            <Container>
                <Typography variant="h3">{movieResult.Title}</Typography>
                <img src={movieResult.Poster} alt={movieResult.Title} />
                <Typography><strong>Actors: </strong> {movieResult.Actors}</Typography>
                <Typography><strong>Director: </strong> {movieResult.Director}</Typography>
                <Typography><strong>Country: </strong> {movieResult.Country}</Typography>
                <Typography><strong>Rated: </strong> {movieResult.Rated}</Typography>
                <Typography><strong>Awards: </strong> {movieResult.Awards}</Typography>
                <Typography><strong>Plot: </strong> {movieResult.Plot}</Typography>
            </Container>
        </Layout>
    );
}