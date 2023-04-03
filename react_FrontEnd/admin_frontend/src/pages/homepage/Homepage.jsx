import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage__cover'>
           <span>Welcome to Task App</span><br/>
           Manage your tasks <br/>
            & <br/>
            update whenever you want to improve
        </div>
    </div>
  )
}

export default Homepage
