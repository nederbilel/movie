import React from 'react'

export default function Filter({ title, onTitleChange, minRating, onMinRatingChange }) {
  return (
    <div className="filter-bar">
      <input
        placeholder="Filter by title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        min={0}
        max={5}
        value={minRating}
        onChange={(e) => onMinRatingChange(e.target.value)}
        placeholder="Min rating"
      />
    </div>
  )
}
