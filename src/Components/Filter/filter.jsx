import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, rating });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formRating">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          step="0.1"
          placeholder="Search by rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary my-4" type="submit">Filter</Button>
    </Form>
  );
};

export default Filter;
