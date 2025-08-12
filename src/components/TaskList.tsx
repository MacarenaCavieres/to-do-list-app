import { PencilSquareIcon, TrashIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

type Props = {};
function TaskList({}: Props) {
    return (
        <ul className="mt-16 overflow-y-auto h-96">
            <li className="border border-black rounded-lg p-3 mb-5 flex justify-between gap-5 items-center">
                <div>
                    <p>
                        Estado: <span className="font-semibold text-blue-700">Pendiente</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam enim ab tenetur vel
                        quam neque odio rem voluptates soluta nobis? Nostrum in amet expedita voluptas ipsum
                        exercitationem nihil omnis animi?
                    </p>
                    <div className="flex gap-5">
                        <p>
                            Inicio: <strong>10/08/2025</strong>
                        </p>
                        <p>
                            Término: <strong>15/08/2025</strong>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 border-s-2 ps-1 border-black">
                    <button type="button">
                        <PencilSquareIcon className="h-8 w-8"></PencilSquareIcon>
                    </button>
                    <button type="button">
                        <TrashIcon className="h-8 w-8 text-red-700"></TrashIcon>
                    </button>
                    <button type="button">
                        <CheckCircleIcon className="h-8 w-8 text-green-700"></CheckCircleIcon>
                    </button>
                </div>
            </li>
        </ul>
    );
}
export default TaskList;
