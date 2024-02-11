import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function CustomCard({ photo, title, description, url, published, country }) {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={photo} alt={"image"} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Published: {published}</Card.Text>
          <Card.Text>Country: {country}</Card.Text>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </Card.Body>
    </Card>
    </div>
  );
}

export default CustomCard;