// As my css file is on same level as src that's why ../../ 
// ../../ notation is used to go up two levels in the directory structure
import "../../index.css";

const Shimmer = () => {
    return (
        <div className="shimmer-container flex ">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    );
};

export default Shimmer;