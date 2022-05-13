import React from "react";
import TaskListItem from "./TaskListItem";
import { Tasks } from '../../interfaces/Tasks';
import { tasksState } from '../../interfaces/TasksState';


// title,contentTask}:Tasks
const TaskList = ({tasks, setTasks}:tasksState) => {
  return (
    <div
      style={{ width: "100%", display: "flex", gap: "1.5rem", padding: "0 0 0 2rem ",flexWrap:"wrap" }}
    >
      {tasks.map((task:Tasks,i:number)=>(
        <TaskListItem taskName={task.taskName} description={task.description} id={i} setTasks={setTasks} key={i} tasks={tasks}/>
      ))}
    </div>
  );
};

export default TaskList;
