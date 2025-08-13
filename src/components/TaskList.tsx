import { PencilSquareIcon, TrashIcon, CheckCircleIcon, BellAlertIcon } from "@heroicons/react/24/outline";
import { useTask } from "../hooks/useTask";
import { ItemStatus } from "../types";

function TaskList() {
    const { state, dispatch } = useTask();

    return (
        <ul className="max-h-customHeight overflow-y-auto">
            {state.tasks.map((item) => (
                <li
                    key={item.id}
                    className="border-2 border-black rounded-lg shadow-lg p-3 mb-5 flex justify-between gap-5 items-center"
                >
                    <div>
                        <p>
                            Estado:{" "}
                            <span
                                className={`font-semibold ${
                                    item.status === ItemStatus.ToStart
                                        ? "text-blue-600"
                                        : item.status === ItemStatus.InProgress
                                        ? "text-orange-600"
                                        : item.status === ItemStatus.Pending &&
                                          item.started.split(",")[0] !==
                                              new Date().toLocaleString().split(",")[0] &&
                                          new Date(item.endDate) > new Date()
                                        ? "text-yellow-600"
                                        : item.status === ItemStatus.Finished
                                        ? "text-green-600"
                                        : item.status === ItemStatus.Late
                                        ? "text-red-600"
                                        : ""
                                }`}
                            >
                                {item.status === ItemStatus.ToStart
                                    ? "Por Iniciar"
                                    : item.status === ItemStatus.InProgress
                                    ? "En Progreso"
                                    : item.status === ItemStatus.Pending &&
                                      item.started.split(",")[0] !==
                                          new Date().toLocaleString().split(",")[0] &&
                                      new Date(item.endDate) > new Date()
                                    ? "Fecha de inicio establecida"
                                    : item.status === ItemStatus.Finished
                                    ? "Terminado"
                                    : item.status === ItemStatus.Late
                                    ? "Atrasado"
                                    : ""}
                            </span>
                        </p>
                        <p className="my-3">{item.task}</p>
                        <div className="flex gap-5">
                            <div>
                                <p>
                                    Inicio: <strong>{item.started.split("-").reverse().join("-")}</strong>
                                </p>
                                <p>
                                    Término: <strong>{item.endDate.split("-").reverse().join("-")}</strong>
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p>
                                    Creado: <strong>{item.created}</strong>
                                </p>
                                <p>
                                    Modificado: <strong>{item.modified}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 border-s-2 ps-1 border-black">
                        <button
                            type="button"
                            disabled={
                                item.status === ItemStatus.Finished || item.status === ItemStatus.InProgress
                                    ? true
                                    : false
                            }
                            className="disabled:text-gray-700 text-yellow-500"
                            onClick={() => dispatch({ type: "set-start-date", payload: { id: item.id } })}
                        >
                            <BellAlertIcon className="h-8 w-8"></BellAlertIcon>
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch({ type: "set-id-editing", payload: { id: item.id } })}
                            disabled={item.status === ItemStatus.Finished}
                            className="disabled:text-gray-700 text-sky-800"
                        >
                            <PencilSquareIcon className="h-8 w-8 "></PencilSquareIcon>
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch({ type: "remove-task", payload: { id: item.id } })}
                        >
                            <TrashIcon className="h-8 w-8 text-red-700"></TrashIcon>
                        </button>
                        <button
                            type="button"
                            onClick={() => dispatch({ type: "set-complete-task", payload: { id: item.id } })}
                            disabled={item.status === ItemStatus.Finished}
                            className="disabled:text-gray-700 text-green-700"
                        >
                            <CheckCircleIcon className="h-8 w-8 "></CheckCircleIcon>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default TaskList;
