import React, { useState } from "react";
import { TasksItemProps } from "../../interfaces/TaskItemProps";
import { Tasks } from '../../interfaces/Tasks';


import {
  Article,
  CardContainer,
  CardTitle,
  CardContent,
  CardButton,
  InputTitle,
InputDescription
} from "./TaskListElements";

const TaskListItem = ({
  taskName,
  description,
  setTasks,
  id,
  tasks,
}: TasksItemProps) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<Tasks>({
taskName:taskName,
description:description
  });

  const [editWarn, setEditWarn] = useState<boolean>(false);

  const handleDel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newTasks = tasks.filter((el) => el !== tasks[id]);
    setTasks(newTasks);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if( isEdit && (! editTask.description.length || !editTask.taskName.length)){
      setEditWarn(true)
    }else{
      setEditWarn(false)
      setIsEdit((prev) => !prev);
    }
  };

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
setEditTask({
  ...editTask,
  [e.target.name]:e.target.value
}
)
}

  return (
    <>
      {isEdit ? (
        <Article>
          <CardContainer>
            <div style={{width:"100%"}}>

            <InputTitle onChange={handleChange}  name='taskName' value={editTask.taskName} required/>
            <hr/>
            </div>
            <InputDescription onChange={handleChange} name='description' value={editTask.description}  required/>
           {editWarn && <div style={{color:"red"}}>All fields are required</div>}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CardButton onClick={handleEdit} color={'blue'}>Edit</CardButton>
              <CardButton onClick={handleDel} color={'red'}>Delete</CardButton>
            </div>
          </CardContainer>
        </Article>
      ) : (
        <Article>
          <CardContainer>
            <div style={{width:"100%"}}>

            <CardTitle>{editTask.taskName}</CardTitle>
            <hr/>
            </div>
            <CardContent> {editTask.description}</CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CardButton onClick={handleEdit} color={'blue'}>Edit</CardButton>
              <CardButton onClick={handleDel} color={'red'}>Delete</CardButton>
            </div>
          </CardContainer>
        </Article>
      )}
    </>
  );
};

export default TaskListItem;
