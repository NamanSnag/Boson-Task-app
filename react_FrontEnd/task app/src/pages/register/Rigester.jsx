import React from "react";
import { Link } from "react-router-dom";

import './style.scss'

const Rigester = () => {
  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Sign Up</h2>
            <form>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
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
