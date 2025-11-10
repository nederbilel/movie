import React, { useMemo, useState } from 'react'
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import AddMovie from './components/AddMovie'

const initialMovies = [
  {
    id: 1,
    title: 'Inception',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology.',
    posterURL:
      'https://m.media-amazon.com/images/I/51y8sdl9wQL._AC_UF894,1000_QL80_.jpg',
    rating: 5,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description:
      'Batman faces the Joker, a criminal mastermind bent on chaos in Gotham City.',
    posterURL:
      'https://m.media-amazon.com/images/I/71poxfO0P+L._AC_UF894,1000_QL80_.jpg',
    rating: 5,
  },
  {
    id: 3,
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterURL:
      'https://m.media-amazon.com/images/I/81zq1nRZc-L._AC_UF894,1000_QL80_.jpg',
    rating: 4,
  },
  {
    id: 4,
    title: 'Breaking Bad',
    description:
      'A high school chemistry teacher turned methamphetamine producer navigates the criminal underworld.',
    posterURL:
      'https://m.media-amazon.com/images/I/71Q1Iu4su6L._AC_UF894,1000_QL80_.jpg',
    rating: 5,
  },
]

export default function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [titleFilter, setTitleFilter] = useState('')
  const [minRating, setMinRating] = useState(0)

  const filteredMovies = useMemo(() => {
    const t = titleFilter.trim().toLowerCase()
    return movies.filter((m) => {
      const matchesTitle = t === '' || m.title.toLowerCase().includes(t)
      const matchesRating = Number(m.rating) >= Number(minRating)
      return matchesTitle && matchesRating
    })
  }, [movies, titleFilter, minRating])

  const handleAddMovie = (movie) => {
    const nextId = movies.length ? Math.max(...movies.map((m) => m.id)) + 1 : 1
    setMovies((prev) => [...prev, { ...movie, id: nextId }])
  }

  return (
    <div className="container">
      <h1>🎬 My Movie App</h1>
      <Filter
        title={titleFilter}
        onTitleChange={setTitleFilter}
        minRating={minRating}
        onMinRatingChange={setMinRating}
      />

      <MovieList movies={filteredMovies} />

      <hr />
      <h2>Add a new movie</h2>
      <AddMovie onAdd={handleAddMovie} />
    </div>
  )
}
