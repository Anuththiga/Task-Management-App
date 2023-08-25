import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'
import TaskStatus from './TaskStatus'

function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const [taskList, setTasksList] = useState([]);

  useEffect(()=> {
    loadLocalStorageTasks();
  },[tasks])
 
  function loadLocalStorageTasks() {
    let loadedTasks = localStorage.getItem("tasks");
    let updatedTasks = JSON.parse(loadedTasks);
    if(updatedTasks) {
      setTasksList(updatedTasks)
    }
  }

  function deleteTask() {
    ///
  }

  function moveTask () {

  }


  return (
    <Container>
      <Row>
        <Col>
          <h1>Task Manager</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Header 
            tasks={tasks}
            settasks = {setTasks}
            />
        </Col>
      </Row>
      <Row className='border'>
        <Col>
          <TaskStatus 
            tasks={taskList}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
            />
        </Col>
        <Col>
          <TaskStatus
            tasks={taskList}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
            />
        </Col>
        <Col>
          <TaskStatus
            tasks={taskList}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          />
        </Col>
      </Row>
        
    </Container>
  )
}

export default TaskContainer