import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`http://localhost:8000/api/tasks/${id}`, {
        method: "DELETE",
      });
      fetchTasks();
    }
  };

  const markCompleted = async (id) => {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>Task List</h3>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <b>{task.title}</b> - {task.status}
            </span>
            <div>
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => markCompleted(task.id)}
              >
                Complete
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

