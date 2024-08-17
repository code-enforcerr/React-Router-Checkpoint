import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${encodeURIComponent(movie.title)}`} style={{ textDecoration: 'none' }}>
      <Card className="movie-card" style={{ margin: '10px' }}>
        <Card.Img variant="top" src={movie.posterURL} style={{height:'500px', objectFit:'cover', border:'none'}} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>
            <strong>Rating: </strong> {movie.rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;