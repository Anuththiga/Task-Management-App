import React from 'react'
import { Button } from 'react-bootstrap'

function Task({}) {
  function handleMoveRight() {
    ///
    
  }

  return (
    <div>
        <Button variant="info" size='sm'>&#171;</Button>
        Task
        <Button variant="info" size='sm' onClick={handleMoveRight}>&#187;</Button>
    </div>
  )
}

export default Task