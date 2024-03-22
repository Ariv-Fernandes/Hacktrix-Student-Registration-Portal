import { useMemo } from "react";
import "./Info.css";

const Info = ({
  calendarBlank,
  startDate,
  jan2024,
  propMinWidth,
  propHeight,
  propAlignSelf,
  propOverflow,
}) => {
  const infoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth, propHeight, propAlignSelf]);

  const calendarBlankIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="info" style={infoStyle}>
      <img
        className="calendarblank-icon"
        loading="lazy"
        alt=""
        src={calendarBlank}
        style={calendarBlankIconStyle}
      />
      <div className="heading2">
        <div className="start-date">{startDate}</div>
        <div className="jan-2024">{jan2024}</div>
      </div>
    </div>
  );
};

export default Info;
