import Info from "../components/Info";
import SalaryLocation from "../components/SalaryLocation";
import FrameComponent2 from "../components/FrameComponent2";
import "./CourseDetails.css";

const CourseDetails = () => {
  return (
    <div className="course-details1">
      <footer className="job-information1">
        <div className="dropdown-list-wrapper">
          <div className="dropdown-list">
            <div className="course-overview1">Course Overview</div>
            <div className="divider">
              <Info
                calendarBlank="/calendarblank.svg"
                startDate="Start Date"
                jan2024="1 Jan, 2024"
                propMinWidth="110px"
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
            <div className="callout">
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
        <div className="star" />
      </footer>
      <div className="course-description">Course Description</div>
      <div className="velstar-is-a">
        Velstar is a Shopify Plus agency, and we partner with brands to help
        them grow, we also do the same with our people!
      </div>
      <section className="here-at-velstar-container">
        <p className="here-at-velstar">{`Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.`}</p>
        <p className="here-at-velstar">{`Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.`}</p>
      </section>
      <img
        className="image-3-icon"
        loading="lazy"
        alt=""
        src="/image-3@2x.png"
      />
      <button className="button2">
        <div className="primary2">Apply now</div>
        <img className="fiarrow-right-icon2" alt="" />
      </button>
      <div className="heading-group">
        <div className="heading1">
          <h2 className="design-and-analysis">
            Design and Analysis of Algorithm
          </h2>
        </div>
        <nav className="tab">
          <div className="under-prof-mr">under Prof. M.R. Shirole</div>
          <button className="badge1">
            <div className="credits1">3 credits</div>
          </button>
          <button className="badge2">
            <div className="featured1">Featured</div>
          </button>
        </nav>
      </div>
      <SalaryLocation mapTrifold="/maptrifold.svg" propTop="656px" />
      <div className="course-details-child" />
      <button className="button3">
        <div className="primary3">Open PDF</div>
        <img
          className="fiarrow-right-icon2"
          alt=""
          src="/fiarrowright-11.svg"
        />
      </button>
      <div className="course-syllabus">Course Syllabus</div>
      <div className="header2">
        <div className="header3" />
        <div className="date-container">
          <div className="date1">12 Jan 2023, Friday</div>
        </div>
        <div className="shape-bender-parent">
          <div className="shape-bender">
            <div className="notification1">
              <img
                className="boldnotification-icon1"
                alt=""
                src="/boldnotification.svg"
              />
              <div className="number-notification1" />
            </div>
          </div>
          <img className="frame-item" alt="" src="/ellipse-1@2x.png" />
        </div>
      </div>
      <FrameComponent2 />
    </div>
  );
};

export default CourseDetails;
