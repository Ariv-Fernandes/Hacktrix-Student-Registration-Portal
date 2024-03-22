import { useMemo } from "react";
import "./Homework.css";

const DataProcessor = ({
  rectangle30,
  graphicFundamentals,
  notSubmitted,
  line35,
  designProject1,
  february102024,
  propGap,
  propAlignSelf,
  propMinWidth,
  propBackgroundColor,
  propColor,
  propMinWidth1,
  propAlignSelf1,
}) => {
  const frameDiv5Style = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propAlignSelf]);

  const graphicFundamentals1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const sizeAdjusterStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const notSubmittedStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const assignmentDesignProjectContainer1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className="data-processor1">
      <img className="data-processor-child" alt="" src={rectangle30} />
      <div className="frame-parent39">
        <div className="graphic-fundamentals-group" style={frameDiv5Style}>
          <div
            className="graphic-fundamentals1"
            style={graphicFundamentals1Style}
          >
            {graphicFundamentals}
          </div>
          <div className="size-adjuster" style={sizeAdjusterStyle}>
            <div className="not-submitted" style={notSubmittedStyle}>
              {notSubmitted}
            </div>
          </div>
        </div>
        <div className="position-provider">
          <img className="position-provider-child" alt="" src={line35} />
          <div className="effect-enabler">
            <div
              className="assignment-design-project-container1"
              style={assignmentDesignProjectContainer1Style}
            >
              <span>{`Assignment: `}</span>
              <span className="design-project-11">{designProject1}</span>
            </div>
            <div className="assignment-design-project-container1">
              <span>{`Due Date: `}</span>
              <span className="design-project-11">{february102024}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessor;
