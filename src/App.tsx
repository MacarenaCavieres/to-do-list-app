import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTask } from "./hooks/useTask";

function App() {
    const { state } = useTask();

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }, [state.tasks]);

    return (
        <>
            <header className="text-4xl h-24 bg-slate-700 text-pink-200 uppercase font-bold flex justify-center items-center">
                Lista de tareas
            </header>

            <main className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 my-16">
                <TaskForm />
                <TaskList />
            </main>
        </>
    );
}

export default App;
