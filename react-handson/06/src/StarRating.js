import React, { useState } from 'react';
import Star from './Star';

// const Star = ({ selected = false }) => <FaStar color={selected ? 'red' : 'grey'} />;

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}
