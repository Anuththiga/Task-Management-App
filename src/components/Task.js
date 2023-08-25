import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

function Task({ task }) {
  
  function handleMoveRight() {
    ///

  }

  return (
    <Row className='mt-4 mb-2'>
      <Col>
        <Button variant="info" size='sm'>&#171;</Button>
      </Col>
      <Col xs={6}>
        {task.title}
      </Col>
      <Col>
        <Button variant="info" size='sm' onClick={handleMoveRight}>&#187;</Button>
      </Col>
    </Row>
  )
}

export default Task