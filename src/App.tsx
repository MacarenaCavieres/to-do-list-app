import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTask } from "./hooks/useTask";
import Graphic from "./components/Graphic";

function App() {
    const { state, dispatch } = useTask();

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }, [state.tasks]);

    useEffect(() => {
        dispatch({ type: "verify-late-tasks" });
    }, []);

    return (
        <>
            <header className="text-4xl h-24 bg-primary text-secondary uppercase font-bold flex justify-center items-center">
                Lista de tareas
            </header>

            <main className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-10 my-16">
                <TaskForm />
                <TaskList />
            </main>
            {state.tasks.length !== 0 && (
                <section className="flex flex-col items-center justify-center py-16 bg-primary text-secondary">
                    <h3 className="mb-10 font-bold text-4xl">Tareas y sus estados</h3>
                    <div className="h-96 w-96 ">
                        <Graphic />
                    </div>
                </section>
            )}
        </>
    );
}

export default App;
