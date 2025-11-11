import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

export default function App() {
  return (
    <MoviesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MoviesProvider>
  );
}
