import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tasklist } from "../../components";

import "./style.scss";

const Dashbord = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [tasks]);

  return (
    <div className="task">
      <div className="task__container">
        <h1>Tasks</h1>
        <ul className="task__list">
          {tasks.length === 0 ? (
            <h2>No Task is Added</h2>
          ) : (
            tasks.map((task, index) => (
              <Tasklist task={task} index={index} key={index} tasks={tasks} setTasks={setTasks} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
