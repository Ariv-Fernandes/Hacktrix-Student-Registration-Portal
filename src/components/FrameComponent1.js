import { useState, useMemo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  teacherEmailID,
  whatIsYourEmailIPlacehold,
  propDisplay,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const [whatIsYour3Value, setWhatIsYour3Value] = useState("");
  const teacherEmailIDStyle = useMemo(() => {
    return {
      display: propDisplay,
      debugCommit: propDebugCommit,
    };
  }, [propDisplay, propDebugCommit]);

  const frameDivStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="frame-parent24">
      <div className="teacher-email-id-wrapper">
        <div className="teacher-email-id" style={teacherEmailIDStyle}>
          {teacherEmailID}
        </div>
      </div>
      <div className="what-is-your-email-id-wrapper" style={frameDivStyle}>
        <input
          className="what-is-your6"
          placeholder={whatIsYourEmailIPlacehold}
          type="text"
          value={whatIsYour3Value}
          onChange={(event) => setWhatIsYour3Value(event.target.value)}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
