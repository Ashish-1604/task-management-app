import React from "react";
import axios from "axios";

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const handleToggleStatus = async () => {
    try {
      await axios.put(`http://localhost:5000/tasks/${task._id}`, {
        status: task.status === "pending" ? "completed" : "pending",
      });
      onTaskUpdated();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      onTaskDeleted();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  // Determine status style
  const statusStyle = {
    fontWeight: "bold",
    color: task.status === "completed" ? "green" : "lightcoral",
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p style={statusStyle}>Status: {task.status}</p>
      <button onClick={handleToggleStatus}>
        {task.status === "pending" ? "Mark as Completed" : "Mark as Pending"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
