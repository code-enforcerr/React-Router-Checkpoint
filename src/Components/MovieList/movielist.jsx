import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../MovieCard/moviecard';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie, index) => (
        <Col key={index} xs={12} md={6} lg={4}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
