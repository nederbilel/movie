# Movie App

A simple React (Vite) app to showcase favorite movies / TV shows. Supports filtering by title and minimum rating and adding new movies.

## Features
- List of movies with title, description, poster URL, rating
- Filter by title (case-insensitive substring) and by clicking minimum star rating
- Add a new movie via Bootstrap modal with validation
- Star-based rating display and input (toggle click to set/reset)
- Summary bar showing count and average rating of filtered results
- Details page per movie with title, description, poster, and YouTube trailer embed
- Responsive grid layout & dark theme styling

## Tech Stack
- React 18
- Vite 5

## Getting Started

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173/).

## Project Structure
```
src/
  App.jsx          # Router + MoviesProvider
  main.jsx         # React root
  styles.css       # Basic styling
  context/
    MoviesContext.jsx # Shared movies state
  components/
    MovieCard.jsx  # Single movie card
    MovieList.jsx  # Grid of cards / empty state
    Filter.jsx     # Title + min rating filter inputs
    AddMovie.jsx   # Form to add a new movie (with optional trailer)
    AddMovieModal.jsx # Bootstrap modal wrapper for AddMovie
    StarRating.jsx # Reusable star component
  pages/
    Home.jsx       # List, filter, add movie button/modal
    MovieDetails.jsx # Details with trailer
  components/MovieData.jsx # Initial movies
```

## Implementation Notes
- `useState` manages movies, filters, modal visibility, and form state.
- `useMemo` optimizes filtered movies calculation and summary stats.
- Star rating component (`StarRating`) supports read-only and interactive modes.
- Add movie flow uses a Bootstrap modal (`AddMovieModal`). You can paste a YouTube embed URL for the trailer (e.g., https://www.youtube.com/embed/VIDEO_ID). If empty, trailer is omitted.
- Basic validation ensures all fields required; rating constrained to 0-5.

## Next Ideas
- Persist movies to localStorage
- Allow editing/deleting movies
- Add star rating component
- Fetch from an external API (OMDb / TMDB)

## License
MIT
