import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  rectangle30,
  graphicFundamentals,
  pending,
  line35,
  designProject1,
  february102024,
  propPadding,
  propGap,
  propWidth,
  propMinWidth,
  propBackgroundColor,
  propColor,
  propMinWidth1,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      gap: propGap,
      width: propWidth,
    };
  }, [propGap, propWidth]);

  const graphicFundamentalsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const pendingStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const assignmentDesignProjectContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="frame-wrapper8" style={frameDiv1Style}>
      <div className="vector-parent15">
        <img className="rectangle-icon" alt="" src={rectangle30} />
        <div className="frame-parent33">
          <div className="graphic-fundamentals-parent" style={frameDiv2Style}>
            <div
              className="graphic-fundamentals"
              style={graphicFundamentalsStyle}
            >
              {graphicFundamentals}
            </div>
            <div className="pending-container" style={frameDiv3Style}>
              <div className="pending1" style={pendingStyle}>
                {pending}
              </div>
            </div>
          </div>
          <div className="vector-parent16">
            <img className="frame-child19" alt="" src={line35} />
            <div className="assignment-design-project-1-parent">
              <div
                className="assignment-design-project-container"
                style={assignmentDesignProjectContainerStyle}
              >
                <span>{`Assignment: `}</span>
                <span className="design-project-1">{designProject1}</span>
              </div>
              <div className="assignment-design-project-container">
                <span>{`Due Date: `}</span>
                <span className="design-project-1">{february102024}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
