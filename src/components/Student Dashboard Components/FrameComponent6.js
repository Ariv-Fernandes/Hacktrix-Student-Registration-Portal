import { useMemo } from "react";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  welcomeStudentName,
  vuesaxlineararrowRight,
  editCourseDetails,
  vuesaxlineararrowRight1,
  isolationMode,
  propAlignSelf,
  propFlexDirection,
  propFlex,
  propFlex1,
  propAlignSelf1,
  propMinWidth,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlexDirection, propFlex]);

  const userStyle = useMemo(() => {
    return {
      flex: propFlex1,
      alignSelf: propAlignSelf1,
    };
  }, [propFlex1, propAlignSelf1]);

  const editCourseDetailsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="user-wrapper" style={frameDiv4Style}>
      <div className="user" style={userStyle}>
        <div className="user-child" />
        <div className="frame-parent35">
          <div className="frame-parent36">
            <div className="frame-parent37">
              <div className="container">
                <h1 className="h11">👋</h1>
              </div>
              <h1 className="welcome-student-name">{welcomeStudentName}</h1>
            </div>
            <div className="always-stay-updated-in-your-st-wrapper">
              <h3 className="always-stay-updated">
                Always stay updated in your student portal, Here is your daily
                activities and job alerts. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </h3>
            </div>
          </div>
          <div className="frame-wrapper10">
            <div className="frame-parent38">
              <button className="edit-personal-details-parent">
                <div className="edit-personal-details">
                  Edit Personal Details
                </div>
                <img
                  className="vuesaxlineararrow-right-icon2"
                  alt=""
                  src={vuesaxlineararrowRight}
                />
              </button>
              <button className="edit-course-details-parent">
                <div
                  className="edit-course-details"
                  style={editCourseDetailsStyle}
                >
                  {editCourseDetails}
                </div>
                <img
                  className="vuesaxlineararrow-right-icon2"
                  alt=""
                  src={vuesaxlineararrowRight1}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="isolation-mode-wrapper">
          <img
            className="isolation-mode-icon"
            loading="lazy"
            alt=""
            src={isolationMode}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
