import React, { useState } from 'react'

const emptyForm = {
  title: '',
  description: '',
  posterURL: '',
  rating: 0,
}

export default function AddMovie({ onAdd }) {
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
      rating: Number(form.rating),
    })
    setForm(emptyForm)
    setError('')
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
        type="number"
        min={0}
        max={5}
        value={form.rating}
        onChange={(e) => update('rating', e.target.value)}
        placeholder="Rating"
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add Movie</button>
    </form>
  )
}
