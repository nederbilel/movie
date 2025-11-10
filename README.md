# Movie App

A simple React (Vite) app to showcase favorite movies / TV shows. Supports filtering by title and minimum rating and adding new movies.

## Features
- List of movies with title, description, poster URL, rating
- Filter by title (case-insensitive substring) and minimum rating (0-5)
- Add a new movie with validation
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
- `useState` manages movies, titleFilter, minRating, and form state.
- `useMemo` optimizes filtered movies calculation.
- Basic validation ensures all fields required; rating constrained to 0-5.

## Next Ideas
- Persist movies to localStorage
- Allow editing/deleting movies
- Add star rating component
- Fetch from an external API (OMDb / TMDB)

## License
MIT
