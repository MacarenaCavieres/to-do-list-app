import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { ItemStatus, type Task } from "../types";
import { useTask } from "../hooks/useTask";

function TaskForm() {
    const { dispatch } = useTask();

    const initialTask: Task = {
        id: uuidv4(),
        status: ItemStatus.ToStart,
        created: new Date().toLocaleString(),
        endDate: "",
        started: "",
        modified: new Date().toLocaleString(),
        task: "",
    };

    const [task, setTask] = useState<Task>(initialTask);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value,
            status: e.target.id === "started" || task.started ? ItemStatus.Pending : ItemStatus.ToStart,
        });
    };

    const isFormNotValid = useMemo(() => {
        const isTaskNotValid = task.task.trim() === "";
        const isEndDateNotValid = task.endDate.trim() === "";
        return isTaskNotValid || isEndDateNotValid;
    }, [task]);

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

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="started" className="text-xl">
                        Agregue una fecha de inicio
                    </label>
                    <input
                        id="started"
                        name="started"
                        type="date"
                        className="border border-black rounded-lg focus:outline-none p-2 mb-5 my-2 w-full"
                        onChange={handleChange}
                        value={task.started}
                    />
                </div>
                <div>
                    <label htmlFor="endDate" className="text-xl">
                        Agregue una fecha de término
                    </label>
                    <input
                        id="endDate"
                        name="endDate"
                        type="date"
                        className="border border-black rounded-lg focus:outline-none p-2 mb-5 my-2 w-full"
                        onChange={handleChange}
                        value={task.endDate}
                    />
                </div>
            </div>

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
