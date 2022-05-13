import { Tasks } from "./Tasks";

export interface tasksState {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}