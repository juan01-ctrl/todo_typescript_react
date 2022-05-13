import React, { useState } from 'react'
import TaskForm from '../taskForm/TaskForm'
import TaskList from '../taskList/TaskList'
import { Tasks } from '../../interfaces/Tasks';





const Todo = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  
  return (
    
    <div style={{display:"flex",padding:"4rem"}}>
        <TaskForm setTasks={setTasks} tasks={tasks}/>
        <TaskList setTasks={setTasks} tasks={tasks}/>
    </div>
  )
}
 
export default Todo