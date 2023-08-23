import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Task from './Task'

function TaskStatus({deleteTask, moveTask, status}) {
  return (
    <div>
      <h5>{status}</h5>
      <Task/>
    </div>
  )
}

export default TaskStatus