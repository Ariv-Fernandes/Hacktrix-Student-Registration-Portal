import Info from "../components/Info";
import SalaryLocation from "../components/SalaryLocation";
import Dashboard from "../components/Dashboard";
import "./CourseDetails1.css";

const CourseDetails1 = () => {
  return (
    <div className="course-details">
      <div className="job-information">
        <div className="job-information-inner">
          <div className="course-overview-parent">
            <div className="course-overview">Course Overview</div>
            <div className="info-parent">
              <Info
                calendarBlank="/calendarblank.svg"
                startDate="Start Date"
                jan2024="1 Jan, 2024"
                propMinWidth="110px"
                propHeight="unset"
                propAlignSelf="unset"
                propOverflow="unset"
              />
              <Info
                calendarBlank="/timer.svg"
                startDate="End date"
                jan2024="15 May, 2024"
                propMinWidth="110px"
                propHeight="unset"
                propAlignSelf="unset"
                propOverflow="unset"
              />
              <Info
                calendarBlank="/stack.svg"
                startDate="Prerequisites "
                jan2024="C, C++"
                propMinWidth="110px"
                propHeight="unset"
                propAlignSelf="unset"
                propOverflow="unset"
              />
            </div>
            <div className="info-group">
              <Info
                calendarBlank="/wallet.svg"
                startDate="Credits"
                jan2024="3"
                propMinWidth="unset"
                propHeight="86px"
                propAlignSelf="unset"
                propOverflow="unset"
              />
              <Info
                calendarBlank="/briefcase.svg"
                startDate="Evaluation type"
                jan2024="Continuous Evaluation "
                propMinWidth="unset"
                propHeight="unset"
                propAlignSelf="stretch"
                propOverflow="hidden"
              />
            </div>
          </div>
        </div>
        <div className="job-information-child" />
      </div>
      <div className="student-description">Student Description</div>
      <img
        className="image-8-icon"
        loading="lazy"
        alt=""
        src="/image-8@2x.png"
      />
      <button className="button">
        <div className="primary"> Accept Request</div>
        <img className="fiarrow-right-icon" alt="" src="/fiarrowright.svg" />
      </button>
      <SalaryLocation mapTrifold="/maptrifold.svg" propTop="536px" />
      <button className="button1">
        <div className="primary1"> Decline Request</div>
        <img className="fiarrow-right-icon" alt="" src="/fiarrowright-1.svg" />
      </button>
      <div className="header">
        <div className="header1" />
        <div className="date-wrapper">
          <div className="date">12 Jan 2023, Friday</div>
        </div>
        <div className="frame-group">
          <div className="notification-wrapper">
            <div className="notification">
              <img
                className="boldnotification-icon"
                alt=""
                src="/boldnotification.svg"
              />
              <div className="number-notification" />
            </div>
          </div>
          <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
        </div>
      </div>
      <Dashboard />
      <div className="heading-parent">
        <div className="heading">
          <h2 className="paul-walker">Paul Walker</h2>
        </div>
        <nav className="subject-3d-animation-techniqu-parent">
          <div className="subject-3d-animation-container">
            <span>{`Subject: `}</span>
            <b>3D Animation Techniques - ANI301</b>
            <span>{` `}</span>
          </div>
          <button className="badge">
            <div className="featured">Featured</div>
          </button>
          <button className="credits-wrapper">
            <div className="credits">3 credits</div>
          </button>
        </nav>
      </div>
      <div className="student-email-id-container">
        <p className="student-email-id">
          Student Email ID : aamin_b22@ce.vjti.ac.in
        </p>
        <p className="student-email-id">Student Registration No : 221070065</p>
        <p className="student-email-id">Student Gender : Male</p>
        <p className="student-email-id">Student Department : Computer</p>
      </div>
    </div>
  );
};

export default CourseDetails1;
