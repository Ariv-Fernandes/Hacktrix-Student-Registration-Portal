import { useState, useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  courseName,
  whatIsTheCourseNPlacehold,
  propWidth,
  propHeight,
}) => {
  const [whatIsTheValue, setWhatIsTheValue] = useState("");
  const courseNameStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="course-name-parent">
      <div className="course-name" style={courseNameStyle}>
        {courseName}
      </div>
      <div className="what-is-the-course-name-wrapper">
        <input
          className="what-is-the"
          placeholder={whatIsTheCourseNPlacehold}
          type="text"
          value={whatIsTheValue}
          onChange={(event) => setWhatIsTheValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default FrameComponent8;
