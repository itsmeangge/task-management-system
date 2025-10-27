import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import './App.css';

function App() {
  return (
    <div className="container mt-4">
      <h1>Task Management System</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;