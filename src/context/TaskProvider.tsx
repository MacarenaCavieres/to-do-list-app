import { useReducer, type ReactNode } from "react";
import { TaskContext } from "./task-context";
import { initialState, taskReducer } from "../reducers/task-reducer";

type Props = {
    children: ReactNode;
};
export const TaskProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};
export default TaskProvider;
