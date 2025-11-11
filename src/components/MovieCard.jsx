import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="description">{movie.description}</p>
        <div className="rating" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <StarRating value={movie.rating} readOnly size={18} />
          <span style={{ fontSize: 12, opacity: 0.7 }}>({movie.rating}/5)</span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <Link to={`/movie/${movie.id}`} className="btn btn-sm btn-outline-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
