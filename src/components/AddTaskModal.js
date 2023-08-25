import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';

function AddTaskModal({closeModal}) {
  const [tasks,setTasks] = useState([]);
  
  useEffect(()=>{
    setTasksToLocalStorage(tasks)
  },[tasks])
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let newTask = {
      title: e.target.title.value,
      description: e.target.description.value
    };

    let updatedTask = [...tasks, newTask];
    setTasks(updatedTask);   
        
    closeModal(false);
    
  }

  function setTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  return (
    <Modal show={true} >
        <Modal.Header onClick={()=>closeModal(false)}  closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="taskForm">
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder=" Enter Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={2} name='description'/>
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
          <Button variant="primary" type="submit" form="taskForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default AddTaskModal