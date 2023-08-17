import React, { useState } from 'react'
import AddTaskModal from './AddTaskModal'
import { Button } from 'react-bootstrap';

function Header() {
  const [openModal,setOpenModal] = useState(false);

  return (
    <div>
      <div className='d-grid mb-4'>
        <Button variant='primary' size='lg' onClick={()=>{setOpenModal(true)}}>Add Task</Button>
      </div>
      {openModal && <AddTaskModal closeModal={setOpenModal} />}
    </div>
  )
}

export default Header