import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {};
function Graphic({}: Props) {
    return (
        <div>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage === 100 ? "#DC2626" : "#3b82f6",
                    trailColor: "#F5F5F5",
                    textSize: 8,
                    textColor: percentage === 100 ? "#DC2626" : "#3b82f6",
                })}
            />
        </div>
    );
}
export default Graphic;
