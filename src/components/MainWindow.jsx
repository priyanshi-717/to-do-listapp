import { FiMenu, FiChevronsRight, FiList, FiAlignCenter, FiSquare, FiPlus, FiLogOut } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { data as initialData } from '../data/data.js';

import './MainWindow.css';

export function MainWindow() {
  const [works, setWorks] = useState(initialData);
  const [showDialog, setShowDialog] = useState(false);
  const [heading, setHeading] = useState("");
  const [tasks, setTasks] = useState([""]);


  function addWork() {
    const newWork = {
      heading: "NEW PROJECT",
      color: "blue",
      tasks: [
        "Task 1",
        "Task 2",
        "Task 3"
      ]
    };

    setWorks([...works, newWork]);
  }

  function deleteWork(indexToDelete) {
    setWorks(
      works.filter((_, index) => index !== indexToDelete)
    );
  }

  function addTaskField() {
    setTasks([...tasks, ""]);
  }

  function updateTask(index, value) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  }

  function createWork() {
    const newWork = {
      heading,
      color: "yellow",
      tasks: tasks.filter(task => task.trim() !== "")
    };

    setWorks(prevWorks => [...prevWorks, newWork]);

    setHeading("");
    setTasks([""]);
    setShowDialog(false);
  }


  return (


    <div className="main-window">
      <h1>STICKY WALL</h1>
      <div className="works">
        {works.map((elem, index) => (
          <div
            className={`work ${elem.color}`}
            key={index}>
            <div
              className="deleteIcon"
              onClick={() => deleteWork(index)}
            >
              <MdDelete size={20} color="red" />
            </div>
            <h2 className="work-heading">{elem.heading}</h2>

            <ul className="work-content">
              {elem.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
        <button
          className="add-task-btn"
          onClick={() => setShowDialog(true)}>
          +
        </button>
      </div>
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">

            <h2>Create Sticky Note</h2>

            <input
              type="text"
              placeholder="Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />

            {tasks.map((task, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Task ${index + 1}`}
                value={task}
                onChange={(e) =>
                  updateTask(index, e.target.value)
                }
              />
            ))}

            <button onClick={addTaskField}>
              Add Task
            </button>

            <button onClick={createWork}>
              Add To Sticky Wall
            </button>

            <button onClick={() => setShowDialog(false)}>
              Cancel
            </button>

          </div>
        </div>
      )}


    </div>


  );
}