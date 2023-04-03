import React from 'react'
import {GrAdd} from 'react-icons/gr'

import './style.scss'

const AddTask = () => {
  return (
    <div className='addtask'>
     <div className='addtask__form'>
        <h1>ADD TASK</h1>
        <input type='text' className='addtask__input' placeholder='Enter task' />
        <button className='addtask__btnn'><GrAdd className='addtask__btn'/>ADD</button>
     </div>
    </div>
  )
}

export default AddTask
