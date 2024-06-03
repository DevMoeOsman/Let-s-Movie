import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationComponent from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovie } from '../redux/actions/movieAction';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">There are no Movies to Show !...</h2>
      )}

      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};

export default MoviesList;
