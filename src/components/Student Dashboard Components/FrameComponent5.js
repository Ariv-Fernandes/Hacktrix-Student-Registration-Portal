import { useMemo } from "react";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  prop,
  minimun,
  attendanceRequired,
  propPadding,
  propWidth,
  propMinWidth,
  propAlignSelf,
}) => {
  const timeStampGeneratorStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const bStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const minimunAttendanceRequiredContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="time-stamp-generator-parent">
      <div className="time-stamp-generator" style={timeStampGeneratorStyle}>
        <b className="b" style={bStyle}>
          {prop}
        </b>
      </div>
      <div
        className="minimun-attendance-required-container"
        style={minimunAttendanceRequiredContainerStyle}
      >
        <p className="minimun">{minimun}</p>
        <p className="minimun">{attendanceRequired}</p>
      </div>
    </div>
  );
};

export default FrameComponent5;
