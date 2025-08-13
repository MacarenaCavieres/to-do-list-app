import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type TooltipItem, type ChartOptions } from "chart.js";
import { useTask } from "../hooks/useTask";

ChartJS.register(ArcElement, Tooltip, Legend);

function Graphic() {
    const { totalTasks, quantityToStart, quantityPending, quantityInProgress, quantityFinished } = useTask();

    const data = {
        labels: ["Por Iniciar", "Fecha de inicio establecida", "En Progreso", "Finalizada"],
        datasets: [
            {
                data: [quantityToStart, quantityPending, quantityInProgress, quantityFinished],
                backgroundColor: ["#facc15", "#f97316", "#3b82f6", "#22c55e"], // Colores para cada estado
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<"pie"> = {
        plugins: {
            legend: { position: "bottom" },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<"pie">) => {
                        const value = context.raw as number;
                        const percentage = ((value * 100) / totalTasks).toFixed(1);
                        return `${context.label}: ${value} (${percentage}%)`;
                    },
                },
            },
        },
    };

    return <Pie data={data} options={options} />;
}
export default Graphic;
