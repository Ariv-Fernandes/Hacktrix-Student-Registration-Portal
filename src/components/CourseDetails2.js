import { useState, useMemo } from "react";
import "./CourseDetails2.css";

const CourseDetails2 = ({
  coursePrerequisites,
  whatAreThePrerequPlacehol,
  propPadding,
  propWidth,
}) => {
  const [whatAreTheValue, setWhatAreTheValue] = useState("");
  const courseDetailsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const coursePrerequisitesStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="course-details4" style={courseDetailsStyle}>
      <div className="course-prerequisites">
        <div className="course-prerequisites1" style={coursePrerequisitesStyle}>
          {coursePrerequisites}
        </div>
        <div className="what-are-lecture-days">
          <input
            className="what-are-the2"
            placeholder={whatAreThePrerequPlacehol}
            type="text"
            value={whatAreTheValue}
            onChange={(event) => setWhatAreTheValue(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails2;
