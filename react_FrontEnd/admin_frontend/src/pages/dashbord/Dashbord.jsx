import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import "./style.scss";

const Dashbord = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    // TODO: Implement
  };

  const handleEditTask = (id) => {
    // TODO: Implement
  };

  const handleDeleteTask = (id) => {};

  return (
    <div className="task">
      <div className="task__container">
        <h1>Tasks</h1>
        <ul className="task__list">
          {tasks.length === 0 ? (
            <h2>No Task is Added</h2>
          ) : (
            tasks.map((task, index) => {
              return (
                <li className="task__o">
                  <div className="task__details">
                    <p> {index} </p>
                    <h2> task name</h2>
                  </div>

                  <div className="task__btn">
                    <FiEdit className="edit" />
                    <RxCross1 className="delete" />
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
