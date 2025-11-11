import React from 'react'
import StarRating from './StarRating'

export default function Filter({ title, onTitleChange, minRating, onMinRatingChange }) {
  return (
    <div className="filter-bar" style={{ alignItems: 'center' }}>
      <input
        placeholder="Filter by title..."
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ opacity: 0.8 }}>Min rating:</span>
        <StarRating value={Number(minRating)} onChange={(n) => onMinRatingChange(n)} />
        {minRating > 0 && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onMinRatingChange(0)}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  )
}
