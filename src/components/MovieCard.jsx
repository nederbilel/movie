import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="description">{movie.description}</p>
        <p className="rating">Rating: {movie.rating} ⭐</p>
      </div>
    </div>
  )
}
