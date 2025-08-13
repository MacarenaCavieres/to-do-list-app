import { useMemo, useReducer, type ReactNode } from "react";
import { TaskContext } from "./task-context";
import { initialState, taskReducer } from "../reducers/task-reducer";
import { ItemStatus, type Task } from "../types";

type Props = {
    children: ReactNode;
};
export const TaskProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    const totalTasks = useMemo(() => state.tasks.length, [state.tasks]);

    const quantityToStart: number = useMemo(
        () =>
            state.tasks.reduce(
                (total: number, acc: Task) => (acc.status === ItemStatus.ToStart ? total + 1 : total + 0),
                0
            ),
        [state.tasks]
    );
    const quantityPending: number = useMemo(
        () =>
            state.tasks.reduce(
                (total: number, acc: Task) => (acc.status === ItemStatus.Pending ? total + 1 : total + 0),
                0
            ),
        [state.tasks]
    );
    const quantityInProgress: number = useMemo(
        () =>
            state.tasks.reduce(
                (total: number, acc: Task) => (acc.status === ItemStatus.InProgress ? total + 1 : total + 0),
                0
            ),
        [state.tasks]
    );
    const quantityFinished: number = useMemo(
        () =>
            state.tasks.reduce(
                (total: number, acc: Task) => (acc.status === ItemStatus.Finished ? total + 1 : total + 0),
                0
            ),
        [state.tasks]
    );
    const quantityLate: number = useMemo(
        () =>
            state.tasks.reduce(
                (total: number, acc: Task) => (acc.status === ItemStatus.Late ? total + 1 : total + 0),
                0
            ),
        [state.tasks]
    );

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
                totalTasks,
                quantityToStart,
                quantityPending,
                quantityInProgress,
                quantityFinished,
                quantityLate,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
export default TaskProvider;
