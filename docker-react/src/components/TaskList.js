import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8000/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h3>All Tasks</h3>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item">
            <b>{task.title}</b> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;