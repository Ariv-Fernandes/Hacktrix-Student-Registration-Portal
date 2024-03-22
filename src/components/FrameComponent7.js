import { useState } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  const [whenDoesTheValue, setWhenDoesTheValue] = useState("");
  const [whenDoesThe1Value, setWhenDoesThe1Value] = useState("");
  return (
    <div className="frame-parent40">
      <div className="what-are-lecture-timings-parent">
        <div className="what-are-lecture-timings">
          <div className="course-credits">Course Credits</div>
        </div>
        <div className="course-description1">
          <div className="how-mane-credits">
            How mane credits does the course have?
          </div>
        </div>
      </div>
      <div className="course-start-date-dd-mm-yyyy-wrapper">
        <div className="course-start-date-container">
          <span className="course-start-date">{`Course Start Date `}</span>
          <span>[DD-MM-YYYY]</span>
        </div>
      </div>
      <div className="lecture-details2">
        <input
          className="when-does-the"
          placeholder="When does the course start?"
          type="text"
          value={whenDoesTheValue}
          onChange={(event) => setWhenDoesTheValue(event.target.value)}
        />
      </div>
      <div className="where-will-lecture-be-conducte-wrapper">
        <div className="where-will-lecture-be-conducte">
          <div className="course-start-date-dd-mm-yyyy-wrapper">
            <div className="course-end-date-container">
              <span className="course-start-date">{`Course End Date `}</span>
              <span>[DD-MM-YYYY]</span>
            </div>
          </div>
          <div className="when-does-the-course-end-wrapper">
            <input
              className="when-does-the"
              placeholder="When does the course end?"
              type="text"
              value={whenDoesThe1Value}
              onChange={(event) => setWhenDoesThe1Value(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
