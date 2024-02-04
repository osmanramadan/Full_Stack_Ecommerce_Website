import React, { useEffect, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons';

const Productrating = ({ stars, onchangestars }) => {
  const [rating, setRating] = useState(4);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  const onStarHover = (nextValue) => {
    setRating(Math.round(nextValue * 2) / 2);
  };

  useEffect(() => {
    onchangestars(rating);
  }, [rating]);

  return (
    <div>
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={stars}
        // value={rating}
        onStarClick={onStarClick}
        onStarHover={onStarHover}
        starColor="gold"
        emptyStarColor="lightgray"
        renderStarIcon={() => (
          <FontAwesomeIcon
            icon={faStar}
            style={{ height: '25px', width: '20px' }}
          />
        )}
        renderStarIconHalf={() => (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            color="gold"
            style={{ height: '25px', width: '23px' }}
          />
        )}
      />
    </div>
  );
};

export default Productrating;
