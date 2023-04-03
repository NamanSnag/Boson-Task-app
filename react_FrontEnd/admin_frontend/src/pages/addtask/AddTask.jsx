import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import axios from "axios";

import "./style.scss";

const AddTask = () => {
  const [task, setTask] = useState(null);

  // add new task
  const handleAddTask = async () => {
    try {
      const res = await axios.post("/addTask", { task: task });
      console.log(res.data.message);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addtask">
      <div className="addtask__form">
        <h1>ADD TASK</h1>
        <input
          type="text"
          className="addtask__input"
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="addtask__btnn">
          <GrAdd className="addtask__btn" onClick={handleAddTask} />
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddTask;
