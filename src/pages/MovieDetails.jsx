import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useMovies } from '../context/MoviesContext'
import StarRating from '../components/StarRating'

export default function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { movies } = useMovies()
  const movie = movies.find((m) => String(m.id) === id)

  if (!movie) {
    return (
      <div className="container" style={{ padding: '2rem' }}>
        <h2>Movie not found</h2>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Go Home</button>
      </div>
    )
  }

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <Link to="/" className="btn btn-link" style={{ paddingLeft: 0 }}>&larr; Back</Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '0.5rem' }}>
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: '300px', borderRadius: '10px', objectFit: 'cover' }}
        />
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <h1 style={{ marginTop: 0 }}>{movie.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <StarRating value={movie.rating} readOnly size={24} />
            <span style={{ fontSize: 14, opacity: 0.7 }}>({movie.rating}/5)</span>
          </div>
          <p style={{ lineHeight: '1.4rem', fontSize: '0.95rem', maxWidth: 600 }}>{movie.description}</p>
          {movie.trailerURL && (
            <div style={{ marginTop: '1.5rem' }}>
              <h3 style={{ marginBottom: '0.75rem' }}>Trailer</h3>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 12 }}>
                <iframe
                  src={movie.trailerURL}
                  title={movie.title + ' trailer'}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
