import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { BsFillHandThumbsUpFill } from "react-icons/bs"
import axios from "axios";

import "./style.scss";

const Tasklist = ({ task, index, tasks, setTasks }) => {
  const [edit, setEdit] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  const handleEditTask = async (id) => {
    if (edit === index) setEdit(null);
    else {
      setEdit(index);
    }
  };

  const handleUpdateTask = async (id) => {
    try {
        axios
        .patch(`/update/${id}`, {task: editedTask})
        .then((response) => {
            setEdit(null);
            alert(response.data.message)
            let tt = tasks[index];
            tasks[index] = {
                ...tt,
                task: editedTask
            }
            setTasks(tasks);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
        console.log(error)
    }
  }

  const handleDeleteTask = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((response) => {
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <li className="task__o">
      <div className="task__details">
        <p> {index + 1} </p>
        {edit === index ? (
          <input
            type="text"
            className="edit_in"
            onChange={(e) => setEditedTask(e.target.value)}
          />
        ) : (
          <h2>{task.task}</h2>
        )}
      </div>

      <div className="task__btn">
      {
        edit === index ? (
            <BsFillHandThumbsUpFill className="edit" onClick={() => handleUpdateTask(task._id)} />
        ) : (
            <FiEdit className="edit" onClick={() => handleEditTask(task._id)} />
        )
      }
        <RxCross1
          className="delete"
          onClick={() => handleDeleteTask(task._id)}
        />
      </div>
    </li>
  );
};

export default Tasklist;
