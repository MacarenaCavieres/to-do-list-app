import { getTodayDate } from "../helpers";
import { ItemStatus, type Task } from "../types";

export type TaskActions =
    //actions
    | { type: "add-task"; payload: { newTask: Task } }
    | { type: "set-id-editing"; payload: { id: Task["id"] } }
    | { type: "set-start-date"; payload: { id: Task["id"] } }
    | { type: "remove-task"; payload: { id: Task["id"] } }
    | { type: "set-complete-task"; payload: { id: Task["id"] } }
    | { type: "verify-late-tasks" };

export type TaskState = {
    tasks: Task[];
    idEditing: Task["id"];
};

const handleLocal = () => {
    const storage = localStorage.getItem("tasks");
    return storage ? JSON.parse(storage) : [];
};

export const initialState = {
    tasks: handleLocal(),
    idEditing: "",
};

export const taskReducer = (state: TaskState = initialState, action: TaskActions) => {
    if (action.type === "add-task") {
        let updatedTasks: Task[] = [];

        if (state.idEditing) {
            updatedTasks = state.tasks.map((item) =>
                item.id === state.idEditing ? action.payload.newTask : item
            );
        } else {
            updatedTasks = [...state.tasks, action.payload.newTask];
        }

        return {
            ...state,
            tasks: updatedTasks,
            idEditing: "",
        };
    }

    if (action.type === "set-id-editing") {
        return {
            ...state,
            idEditing: action.payload.id,
        };
    }

    if (action.type === "set-start-date") {
        const updatedTasks = state.tasks.map((item) =>
            item.id === action.payload.id
                ? {
                      ...item,
                      started: new Date().toLocaleDateString().split("-").reverse().join("-"),
                      status: ItemStatus.InProgress,
                      modified: new Date().toLocaleString(),
                  }
                : item
        );
        return {
            ...state,
            tasks: updatedTasks,
        };
    }

    if (action.type === "remove-task") {
        return {
            ...state,
            tasks: state.tasks.filter((item) => item.id !== action.payload.id),
        };
    }

    if (action.type === "set-complete-task") {
        return {
            ...state,
            tasks: state.tasks.map((item) =>
                item.id === action.payload.id
                    ? {
                          ...item,
                          endDate: new Date().toLocaleDateString().split("-").reverse().join("-"),
                          status: ItemStatus.Finished,
                          modified: new Date().toLocaleString(),
                      }
                    : item
            ),
        };
    }

    if (action.type === "verify-late-tasks") {
        const updatedTasks = state.tasks.map((item) =>
            (item.status === ItemStatus.ToStart || item.status === ItemStatus.Pending) &&
            item.endDate < getTodayDate().toLocaleString().split(",")[0].split("-").reverse().join("-")
                ? { ...item, status: ItemStatus.Late }
                : item
        );

        return {
            ...state,
            tasks: updatedTasks,
        };
    }

    return {
        ...state,
    };
};
