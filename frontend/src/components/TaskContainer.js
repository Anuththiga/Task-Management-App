import React, { useState } from 'react'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'
import TaskStatus from './TaskStatus'

function TaskContainer() {
  // const [tasks, setTasks] = useState([]);

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
          <Header/>
        </Col>
      </Row>
      <Row className='border'>
        <Col>
          <TaskStatus 
            // tasks={tasks}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
            />
        </Col>
        <Col>
          <TaskStatus
            // tasks={tasks}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
            />
        </Col>
        <Col>
          <TaskStatus
            // tasks={tasks}
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