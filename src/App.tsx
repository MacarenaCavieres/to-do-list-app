import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
    return (
        <>
            <header className="text-5xl h-40 bg-slate-700 text-pink-200 uppercase font-bold flex justify-center items-center">
                Lista de tareas
            </header>

            <main className="mx-auto grid grid-cols-2 gap-10 px-10">
                <TaskForm />
                <TaskList />
            </main>
        </>
    );
}

export default App;
