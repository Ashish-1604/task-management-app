import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onTaskUpdated={onTaskUpdated}
          onTaskDeleted={onTaskDeleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
