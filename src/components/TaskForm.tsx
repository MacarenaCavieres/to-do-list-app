import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "../types";
import { useTask } from "../hooks/useTask";

type Props = {};
function TaskForm({}: Props) {
    const { dispatch } = useTask();

    const initialTask = {
        id: uuidv4(),
        created: new Date().toLocaleString(),
        endDate: "",
        task: "",
    };

    const [task, setTask] = useState<Task>(initialTask);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value,
        });
    };

    const isFormNotValid = useMemo(() => Object.values(task).includes(""), [task]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: "add-task", payload: { newTask: task } });

        setTask({
            ...initialTask,
            id: uuidv4(),
        });
    };

    return (
        <form className="flex flex-col my-16" onSubmit={handleSubmit}>
            <label htmlFor="task" className="text-xl">
                Agregue una tarea pendiente
            </label>
            <textarea
                id="task"
                name="task"
                placeholder="Ingrese una tarea"
                className="focus:outline-none border border-black rounded-lg p-2 mb-5 my-2"
                rows={3}
                onChange={handleChange}
                value={task.task}
            ></textarea>

            <label htmlFor="endDate" className="text-xl">
                Agregue una fecha de término
            </label>
            <input
                id="endDate"
                name="endDate"
                type="date"
                className="border border-black rounded-lg focus:outline-none p-2 w-6/12 mb-5 my-2"
                onChange={handleChange}
                value={task.endDate}
            />

            <button
                type="submit"
                className="bg-cyan-950 text-white p-2 rounded-lg uppercase font-bold hover:bg-cyan-800 disabled:bg-slate-500"
                disabled={isFormNotValid}
            >
                Agregar Tarea
            </button>
        </form>
    );
}
export default TaskForm;
