type Props = {};
function TaskForm({}: Props) {
    return (
        <form className="flex flex-col my-16">
            <label htmlFor="task" className="text-xl">
                Agregue una tarea pendiente
            </label>
            <input
                type="text"
                id="task"
                name="task"
                placeholder="Ingrese una tarea"
                className="focus:outline-none border border-black rounded-lg p-2 mb-5 my-2"
            />

            <label htmlFor="endDate" className="text-xl">
                Agregue una fecha de término
            </label>
            <input
                id="endDate"
                name="endDate"
                type="date"
                className="border border-black rounded-lg focus:outline-none p-2 w-6/12 mb-5 my-2"
            />

            <button
                type="submit"
                className="bg-cyan-950 text-white p-2 rounded-lg uppercase font-bold hover:bg-cyan-800"
            >
                Agregar Tarea
            </button>
        </form>
    );
}
export default TaskForm;
