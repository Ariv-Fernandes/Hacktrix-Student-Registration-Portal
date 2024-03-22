import { useState, useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  departmentDetails,
  departmentName,
  whatIsYourDepartmPlacehol,
  propPadding,
  propWidth,
  propDisplay,
}) => {
  const [whatIsYour4Value, setWhatIsYour4Value] = useState("");
  const frameDiv6Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const departmentNameStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className="department-details-parent" style={frameDiv6Style}>
      <b className="department-details1">{departmentDetails}</b>
      <div className="department-name-parent">
        <div className="department-name" style={departmentNameStyle}>
          {departmentName}
        </div>
        <div className="department-label">
          <input
            className="what-is-your9"
            placeholder={whatIsYourDepartmPlacehol}
            type="text"
            value={whatIsYour4Value}
            onChange={(event) => setWhatIsYour4Value(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
