import { useState } from "react";
import { Homepage, SignIn, Register, Dashbord, AddTask } from "./pages";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {user === null ? (
          <>
            <Route path="/login" exact element={<SignIn setUser={setUser}/>} />
            <Route path="/register" exact element={<Register />} />
          </>
        ) : (
          <>
            <Route path="/task" exact element={<Dashbord />} />
            <Route path="/addtask" exact element={<AddTask />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;


