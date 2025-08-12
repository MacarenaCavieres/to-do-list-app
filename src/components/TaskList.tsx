import { PencilSquareIcon, TrashIcon, CheckCircleIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { useTask } from "../hooks/useTask";
import { ItemStatus } from "../types";

function TaskList() {
    const { state } = useTask();

    return (
        <ul className="mt-16 overflow-y-auto h-96">
            {state.tasks.map((item) => (
                <li
                    key={item.id}
                    className="border border-black rounded-lg p-3 mb-5 flex justify-between gap-5 items-center"
                >
                    <div>
                        <p>
                            Estado:{" "}
                            <span className="font-semibold text-blue-700">
                                {item.status === ItemStatus.ToStart
                                    ? "Por Iniciar"
                                    : item.status === ItemStatus.Pending &&
                                      item.started === new Date().toLocaleString()
                                    ? "Realizandose"
                                    : item.status === ItemStatus.Pending &&
                                      item.started.split(",")[0] !== new Date().toLocaleString()
                                    ? "Fecha de inicio establecida"
                                    : "Terminado"}
                            </span>
                        </p>
                        <p className="my-3">{item.task}</p>
                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <p>
                                    Creado: <strong>{item.created}</strong>
                                </p>
                                <p>
                                    Modificado: <strong>{item.modified}</strong>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Inicio: <strong>{item.started.split("-").reverse().join("-")}</strong>
                                </p>
                                <p>
                                    Término: <strong>{item.endDate.split("-").reverse().join("-")}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 border-s-2 ps-1 border-black">
                        <button type="button">
                            <BellAlertIcon className="h-8 w-8 text-yellow-500"></BellAlertIcon>
                        </button>
                        <button type="button">
                            <PencilSquareIcon className="h-8 w-8 text-slate-600"></PencilSquareIcon>
                        </button>
                        <button type="button">
                            <TrashIcon className="h-8 w-8 text-red-700"></TrashIcon>
                        </button>
                        <button type="button">
                            <CheckCircleIcon className="h-8 w-8 text-green-700"></CheckCircleIcon>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default TaskList;
