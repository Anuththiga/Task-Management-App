import React, { useState, useEffect } from 'react'
// import AddTaskModal from './AddTaskModal'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
  const [openModal,setOpenModal] = useState(false);
  const [tasks,setTasks] = useState([]);
  const [urgency, setUrgency] = useState("low");
  const [status, setStatus] = useState("Backlog");


  useEffect(()=>{
    setTasksToLocalStorage(tasks)
  },[tasks]) 

  function handleSubmit(e) {
    e.preventDefault();
    
    let newTask = {
      title: e.target.title.value,
      description: e.target.description.value,
      urgency: urgency,
      status: status
    };

    let updatedTask = [...tasks, newTask];
    setTasks(updatedTask);   

    setOpenModal(false);
    
  }

  function setTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
 
  return (
    <div>
      <div className='d-grid mb-4'>
        <Button variant='primary' size='lg' onClick={()=>{setOpenModal(true)}}>Add Task</Button>
      </div>
      {openModal && 
      
      <Modal show = {true} >
        <Modal.Header onClick={()=>setOpenModal(false)}  closeButton>
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
            <Form.Group className="mb-3" controlId='urgency'>
              <Form.Check 
                type= "radio"
                name= "urgency"
                label= "low"
                onChange={(e) => setUrgency("low")}
              />
              <Form.Check 
                type="radio"
                name= "urgency"
                label= "medium"
                onChange={(e) => setUrgency("medium")}
              />
              <Form.Check 
                type="radio"
                name= "urgency"
                label= "high"
                onChange={(e) => setUrgency("high")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setOpenModal(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" form="taskForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      }
    </div>
  )
}

export default Header