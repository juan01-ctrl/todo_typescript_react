import React, { useRef, useState } from "react";
import { tasksState } from "../../interfaces/TasksState";
import { Tasks } from "../../interfaces/Tasks";

import {
  FormContainer,
  FormTitle,
  Form,
  InputTitle,
  InputDesc,
  FormButton,
  InputContainer,
} from "./TaskFormElements";

const TaskForm = ({ setTasks, tasks }: tasksState) => {
  const newTask = useRef<HTMLInputElement>(null);

  const initialForm: Tasks = {
    taskName: "",
    description: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm(initialForm);

    setTasks([...tasks, form]);
    newTask.current?.focus();
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormContainer>
      <FormTitle>Add Task</FormTitle>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <InputTitle
            onChange={handleChange}
            placeholder="Write a task"
            name="taskName"
            value={form.taskName}
            autoFocus
            required
            ref={newTask}
          />
          <InputDesc
            onChange={handleChange}
            placeholder="Write a description"
            name="description"
            value={form.description}
            required
          />
        </InputContainer>
        <FormButton type="submit">Save</FormButton>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
