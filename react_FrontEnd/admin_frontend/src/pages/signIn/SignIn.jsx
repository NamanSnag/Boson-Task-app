import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

import './style.scss'

const SignIn = ({setUser}) => {

  const [authData, setAuthData] = useState({
    email : null,
    password : null,
  })

  const navigate = useNavigate();

  const handleAuthChange = ({currentTarget : input}) => {
    setAuthData((prev) => ({ ...prev, [input.name] : input.value}));
  }

  // hitting register api
  const handleSignIn = async (e) => {
    e.preventDefault();
    const URL = "/user/login"
    try {
      const res = await axios.post(URL, authData)
      const user = res.data.details._id;
      localStorage.setItem("user", user);
      setUser(localStorage.getItem('user'));  
      navigate('/task');    
      return
    } catch (error) {
      return error
    }
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Log In</h2>
            <form method='POST' onSubmit={handleSignIn}>
              <div className="input-box">
                <input type="text" name="email" placeholder="Email" onChange={handleAuthChange}/>
              </div>
              <div className="input-box">
                <input type="password" name="password" placeholder="Password" onChange={handleAuthChange}/>
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
