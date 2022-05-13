import { Tasks } from "./Tasks";

export interface TasksItemProps {
    taskName: string;
    description: string;
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
    id:number;
}
  