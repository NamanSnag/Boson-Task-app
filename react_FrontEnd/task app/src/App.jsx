import { useState } from "react";
import { Homepage, SignIn, Register } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/login' exact element={<SignIn/>} />
        <Route path='/register' exact element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
