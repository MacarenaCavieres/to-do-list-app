import { createContext, type ActionDispatch } from "react";
import { type TaskActions, type TaskState } from "../reducers/task-reducer";

export type ContextProps = {
    state: TaskState;
    dispatch: ActionDispatch<[action: TaskActions]>;
    totalTasks: number;
    quantityToStart: number;
    quantityPending: number;
    quantityInProgress: number;
    quantityFinished: number;
    quantityLate: number;
};

export const TaskContext = createContext<ContextProps>(null!);
