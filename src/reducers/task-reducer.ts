import type { Task } from "../types";

export type TaskActions =
    //actions
    { type: "add-task"; payload: { newTask: Task } };

export type TaskState = {
    tasks: Task[];
};

const handleLocal = () => {
    const storage = localStorage.getItem("tasks");
    return storage ? JSON.parse(storage) : [];
};

export const initialState = {
    tasks: handleLocal(),
};

export const taskReducer = (state: TaskState = initialState, action: TaskActions) => {
    if (action.type === "add-task") {
        return {
            ...state,
            tasks: [...state.tasks, action.payload.newTask],
        };
    }

    return {
        ...state,
    };
};
