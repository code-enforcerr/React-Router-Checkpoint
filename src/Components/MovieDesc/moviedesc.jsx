import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  return (
    <div>
      {movie ? (
        <Card>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description}</Card.Text>
            <Card.Text>
              <strong>Rating: </strong> {movie.rating}
            </Card.Text>
            <iframe
              width="100%"
              height="400"
              src={movie.trailerURL}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Link to="/">
              <Button variant="primary" className="mt-3">Back to Home</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDescription;
