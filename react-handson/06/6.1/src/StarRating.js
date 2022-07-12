import React, { useState } from 'react';
import Star from './Star';

// const Star = ({ selected = false }) => <FaStar color={selected ? 'red' : 'grey'} />;

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: '5ps', ...style }} {...props}>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
}
