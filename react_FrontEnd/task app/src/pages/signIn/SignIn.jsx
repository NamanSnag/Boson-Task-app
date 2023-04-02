import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

const SignIn = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Log In</h2>
            <form>
              <div className="input-box">
                <input type="text" name="email" placeholder="Email"/>
              </div>
              <div className="input-box">
                <input type="password" name="password" placeholder="Password"/>
              </div>
              <div className="input-box">
                <input type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
        <Link to="/register" className="btn">
          Sign Up
        </Link>
        {/* <a href="#" class='btn signup'>Signup</a> */}
      </div>
    </div>
  )
}

export default SignIn
