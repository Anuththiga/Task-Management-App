import React from 'react'
import '../styles/taskContainer.scss'
import Header from './Header'

function TaskContainer() {
  return (
    <div className='container'>
        <h1>Task Manager</h1>
        <Header/>
    </div>
  )
}

export default TaskContainer