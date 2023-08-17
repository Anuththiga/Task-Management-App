import React from 'react'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap'

function TaskContainer() {
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
        
    </Container>
  )
}

export default TaskContainer