import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { data as initialData } from "../data/data.js";
import "./MainWindow.css";

export function MainWindow() {
  const [works, setWorks] = useState(initialData);

  const [showDialog, setShowDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState("create"); // create | update
  const [editingIndex, setEditingIndex] = useState(null);

  const [heading, setHeading] = useState("");
  const [tasks, setTasks] = useState([""]);

  function deleteWork(indexToDelete) {
    setWorks(prevWorks =>
      prevWorks.filter((_, index) => index !== indexToDelete)
    );
  }

  function addTaskField() {
    setTasks(prevTasks => [...prevTasks, ""]);
  }

  function updateTask(index, value) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  }

  function openCreateDialog() {
    setDialogMode("create");
    setEditingIndex(null);

    setHeading("");
    setTasks([""]);

    setShowDialog(true);
  }

  function openUpdateDialog(index) {
    const work = works[index];

    setDialogMode("update");
    setEditingIndex(index);

    setHeading(work.heading);
    setTasks([...work.tasks]);

    setShowDialog(true);
  }

  function saveWork() {
    const workData = {
      heading,
      color: "yellow",
      tasks: tasks.filter(task => task.trim() !== "")
    };

    if (dialogMode === "create") {
      setWorks(prevWorks => [...prevWorks, workData]);
    } else {
      setWorks(prevWorks =>
        prevWorks.map((work, index) =>
          index === editingIndex
            ? {
              ...work,
              heading: workData.heading,
              tasks: workData.tasks
            }
            : work
        )
      );
    }

    setHeading("");
    setTasks([""]);
    setEditingIndex(null);
    setShowDialog(false);
  }

  return (
    <div className="main-window">
      <h1>STICKY WALL</h1>

      <div className="works">
        {works.map((elem, index) => (
          <div
            className={`work ${elem.color}`}
            key={index}
          >
            <div
              className="deleteIcon"
              onClick={() => deleteWork(index)}
            >
              <MdDelete size={20} color="red" />
            </div>

            <h2 className="work-heading">
              {elem.heading}
            </h2>

            <ul className="work-content">
              {elem.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <div className="update-btn-container">
              <button
                className="update-btn"
                onClick={() =>
                  openUpdateDialog(index)
                }
              >
                Update
              </button>
            </div>
          </div>
        ))}

        <button
          className="add-task-btn"
          onClick={openCreateDialog}
        >
          +
        </button>
      </div>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>
              {dialogMode === "create"
                ? "Create Sticky Note"
                : "Update Sticky Note"}
            </h2>

            <input
              type="text"
              placeholder="Heading"
              value={heading}
              onChange={(e) =>
                setHeading(e.target.value)
              }
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

            <button onClick={saveWork}>
              {dialogMode === "create"
                ? "Add To Sticky Wall"
                : "Save Changes"}
            </button>

            <button
              onClick={() => {
                setShowDialog(false);
                setEditingIndex(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

