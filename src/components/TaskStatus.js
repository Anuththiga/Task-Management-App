import React from 'react'
import Task from './Task'

function TaskStatus({deleteTask, moveTask, status, tasks}) {
  let backlogTasks = tasks.map((task)=> {
    if(task.status === status) {
      return (
        <Task 
          task = {task}
        />
      )
    }
  })
  return (
    <div>
      <h5>{status}</h5>
      {backlogTasks}      
    </div>
  )
}

export default TaskStatus