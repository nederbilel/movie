import React, { createContext, useContext, useState } from 'react'
import initialMoviesData from '../components/MovieData'

const MoviesContext = createContext(null)

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(initialMoviesData)
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const ctx = useContext(MoviesContext)
  if (!ctx) throw new Error('useMovies must be used within MoviesProvider')
  return ctx
}
