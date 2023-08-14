import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';


function AddTaskModal({closeModal}) {
  return (
    <Modal show={true} >
        <Modal.Header onClick={()=>closeModal(false)}  closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <InputGroup className="mb-3" >
              <Button variant="success">low</Button>
              <Button variant="primary">medium</Button>
              <Button variant="danger">high</Button>
            </InputGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>closeModal(false)}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddTaskModal