import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './style.scss'
import axios from "axios";

const Rigester = () => {

  const [authData, setAuthData] = useState({
    email : null,
    name : null,
    password : null,
  })

  const navigate = useNavigate();

  const handleAuthChange = ({currentTarget : input}) => {
    setAuthData((prev) => ({ ...prev, [input.name] : input.value}));
  }

  // hitting register api
  const handleSignUp = async (e) => {
    e.preventDefault();
    const URL = "/user/register"
    try {
      const res = await axios.post(URL, authData)
      const user = res.details._id;
      console.log(res)
      localStorage.setItem("user", user);
      
    } catch (error) {
      return error
    }
    navigate('/login');
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Sign Up</h2>
            <form method="POST" onSubmit={handleSignUp}>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleAuthChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  onChange={handleAuthChange}
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleAuthChange}
                />
              </div>
              <div className="input-box">
                <input type="submit" value="Sign Up" />
              </div>
            </form>
          </div>
        </div>
        <Link to="/login" className="btn">
          Log In
        </Link>
        {/* <a href="#" class='btn signup'>Signup</a> */}
      </div>
    </div>
  );
};

export default Rigester;
