import React from 'react';
import Color from './Color';

export default function ColorList({ colors = [], onRemoveColor = (f) => f, onRateColor = (f) => f }) {
  if (!colors.length) return <div>No Colors Listed.</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={colors.id} {...color} onRemove={onRemoveColor} onRate={onRateColor} />
      ))}
    </div>
  );
}
