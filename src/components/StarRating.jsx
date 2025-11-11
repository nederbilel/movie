import React from 'react'

// Reusable star rating component
// Props: value (number), onChange? (function), max (default 5), readOnly (bool)
export default function StarRating({ value = 0, onChange, max = 5, readOnly = false, size = 22 }) {
  const stars = []
  for (let i = 1; i <= max; i++) {
    const filled = i <= value
    stars.push(
      <span
        key={i}
        onClick={() => {
          if (readOnly || !onChange) return
          onChange(i === value ? 0 : i) // toggle off if same star
        }}
        style={{
          cursor: readOnly ? 'default' : 'pointer',
          color: filled ? '#ffc107' : '#555',
          fontSize: size,
          lineHeight: 1,
          userSelect: 'none',
          transition: 'color .15s',
        }}
        aria-label={filled ? 'Filled star' : 'Empty star'}
      >
        ★
      </span>
    )
  }
  return <div style={{ display: 'inline-flex', gap: 4 }}>{stars}</div>
}
