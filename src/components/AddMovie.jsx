import React, { useState } from 'react'
import StarRating from './StarRating'

const emptyForm = {
  title: '',
  description: '',
  posterURL: '',
  trailerURL: '',
  rating: 0,
}

export default function AddMovie({ onAdd, onSuccess }) {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.description.trim() || !form.posterURL.trim()) {
      setError('Please fill all fields.')
      return
    }
    if (form.rating < 0 || form.rating > 5) {
      setError('Rating must be between 0 and 5.')
      return
    }
    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      posterURL: form.posterURL.trim(),
      trailerURL: form.trailerURL.trim() || undefined,
      rating: Number(form.rating),
    })
    setForm(emptyForm)
    setError('')
    onSuccess && onSuccess()
  }

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => update('title', e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => update('description', e.target.value)}
      />
      <input
        placeholder="Poster URL"
        value={form.posterURL}
        onChange={(e) => update('posterURL', e.target.value)}
      />
      <input
        placeholder="Trailer URL (YouTube embed, optional)"
        value={form.trailerURL}
        onChange={(e) => update('trailerURL', e.target.value)}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ opacity: 0.8 }}>Rating:</span>
        <StarRating value={form.rating} onChange={(n) => update('rating', n)} />
        {form.rating > 0 && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => update('rating', 0)}
          >
            Reset
          </button>
        )}
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit" className="btn btn-primary">Add Movie</button>
    </form>
  )
}
