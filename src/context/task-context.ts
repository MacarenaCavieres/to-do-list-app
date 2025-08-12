import { createContext, type ActionDispatch } from "react";
import { type TaskActions, type TaskState } from "../reducers/task-reducer";

export type ContextProps = {
    state: TaskState;
    dispatch: ActionDispatch<[action: TaskActions]>;
};

export const TaskContext = createContext<ContextProps>(null!);
