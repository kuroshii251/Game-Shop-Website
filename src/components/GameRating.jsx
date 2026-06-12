import React from 'react'
import './gameRating.css';

function GameRating({ rating = 0 }) {
  const stars = [];

  if (rating >= 1 && rating <= 5) {
    for (let i = 0; i < rating; i += 1) {
      stars.push(i);
    }
  }

  return (
    <div className="gameRating">
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

export default GameRating;
