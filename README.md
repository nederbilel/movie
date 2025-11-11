# Movie App

A simple React (Vite) app to showcase favorite movies / TV shows. Supports filtering by title and minimum rating and adding new movies.

## Features
- List of movies with title, description, poster URL, rating
- Filter by title (case-insensitive substring) and by clicking minimum star rating
- Add a new movie via Bootstrap modal with validation
- Star-based rating display and input (toggle click to set/reset)
- Summary bar showing count and average rating of filtered results
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
  App.jsx          # Main app: holds state & filtering logic
  main.jsx         # React root
  styles.css       # Basic styling
  components/
    MovieCard.jsx  # Single movie card
    MovieList.jsx  # Grid of cards / empty state
    Filter.jsx     # Title + min rating filter inputs
    AddMovie.jsx   # Form to add a new movie
```

## Implementation Notes
- `useState` manages movies, filters, modal visibility, and form state.
- `useMemo` optimizes filtered movies calculation and summary stats.
- Star rating component (`StarRating`) supports read-only and interactive modes.
- Add movie flow uses a Bootstrap modal (`AddMovieModal`).
- Basic validation ensures all fields required; rating constrained to 0-5.

## Next Ideas
- Persist movies to localStorage
- Allow editing/deleting movies
- Add star rating component
- Fetch from an external API (OMDb / TMDB)

## License
MIT
