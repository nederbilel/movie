import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import AddMovie from './AddMovie'

export default function AddMovieModal({ show, onClose, onAdd }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add a new movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddMovie onAdd={onAdd} onSuccess={onClose} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
