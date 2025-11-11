import React, { useMemo, useState } from 'react';
import initialMovies from './components/MovieData';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieModal from './components/AddMovieModal';

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [showAdd, setShowAdd] = useState(false);

  const filteredMovies = useMemo(() => {
    const t = titleFilter.trim().toLowerCase();
    return movies.filter(
      (m) =>
        (t === '' || m.title.toLowerCase().includes(t)) &&
        Number(m.rating) >= Number(minRating)
    );
  }, [movies, titleFilter, minRating]);

  const summary = useMemo(() => {
    const count = filteredMovies.length;
    const avg = count
      ? (filteredMovies.reduce((s, m) => s + Number(m.rating || 0), 0) / count).toFixed(1)
      : '0.0';
    return { count, avg };
  }, [filteredMovies]);

  const handleAddMovie = (movie) => {
    const nextId = movies.length ? Math.max(...movies.map((m) => m.id)) + 1 : 1;
    setMovies((prev) => [...prev, { ...movie, id: nextId }]);
  };

  return (
    <div className="container">
      <h1>🎬 My Movie App</h1>
      <Filter
        title={titleFilter}
        onTitleChange={setTitleFilter}
        minRating={minRating}
        onMinRatingChange={setMinRating}
      />
      <div style={{ marginBottom: '0.75rem', opacity: 0.85 }}>
        Showing {summary.count} result{summary.count === 1 ? '' : 's'} · Average rating {summary.avg}
      </div>
      <MovieList movies={filteredMovies} />
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Add a new movie</h2>
        <button className="btn btn-success" onClick={() => setShowAdd(true)}>+ Add Movie</button>
      </div>
      <AddMovieModal show={showAdd} onClose={() => setShowAdd(false)} onAdd={handleAddMovie} />
    </div>
  );
}
