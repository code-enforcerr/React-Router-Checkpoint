import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = () => {
    if (title && description && posterURL && rating) {
      const newMovie = {
        title,
        description,
        posterURL,
        rating: parseFloat(rating),
      };
      onAddMovie(newMovie);
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Form className="mb-4">
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter movie description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPosterURL">
        <Form.Label>Poster URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formRating width-20">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter movie rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary my-4" onClick={handleAddMovie}>
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovie;
