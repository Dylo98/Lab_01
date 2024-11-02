import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';

function ProfileCard({ name, birth, eyes, initialRating, onEdit, onDelete }) {
  const [rating, setRating] = useState(initialRating);

  const handleRateClick = () => {
    setRating(prevRating => (prevRating === 10 ? 0 : prevRating + 1));
  };

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Date of Birth:</strong> {birth}
        </Card.Text>
        <Card.Text>
          <strong>Eye Color:</strong> {eyes}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>

        {/* Rating Bar */}
        <RatingBar rate={rating} />

        <div className="mt-auto">
          <Button onClick={onEdit} variant="primary" className="m-1">
            Edit
          </Button>
          <Button onClick={onDelete} variant="danger" className="m-1">
            Delete
          </Button>
          <Button onClick={handleRateClick} variant="secondary" className="m-1">
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  initialRating: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProfileCard;
