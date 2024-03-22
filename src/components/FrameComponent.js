import { useState } from "react";
import "./FrameComponent.css";

const FrameComponent = ({ lectureTimings, whatAreTheLecturePlacehol }) => {
  const [whatAreTheValue, setWhatAreTheValue] = useState("");
  return (
    <div className="frame-wrapper5">
      <div className="lecture-timings-parent">
        <div className="lecture-timings">{lectureTimings}</div>
        <div className="what-are-the-lecture-timings-wrapper">
          <input
            className="what-are-the"
            placeholder={whatAreTheLecturePlacehol}
            type="text"
            value={whatAreTheValue}
            onChange={(event) => setWhatAreTheValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
