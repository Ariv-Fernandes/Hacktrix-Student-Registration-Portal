import FrameComponent8 from "../components/FrameComponent8";
import CourseDetails2 from "../components/CourseDetails2";
import FrameComponent7 from "../components/FrameComponent7";
import LectureLocation from "../components/LectureLocation";
import "./AddCourse.css";

const AddCourse = () => {
  return (
    <div className="add-course">
      <div className="vector-parent5">
        <img className="vector-icon24" alt="" src="/vector.svg" />
        <img className="vector-icon25" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon26"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <section className="frame-section">
        <img
          className="vector-icon27"
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <img className="vector-icon28" alt="" src="/vector.svg" />
      </section>
      <div className="vector-parent6">
        <img
          className="vector-icon29"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon30"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="what-are-prerequisites" alt="" src="/vector-7.svg" />
      </div>
      <form className="hero-section2">
        <div className="course-details-wrapper">
          <b className="course-details2">Course Details</b>
        </div>
        <div className="number-of-credits">
          <FrameComponent8
            courseName="Course Name"
            whatIsTheCourseNPlacehold="What is the course name?"
            propWidth="170.8px"
            propHeight="26px"
          />
          <FrameComponent8
            courseName="Course Description"
            whatIsTheCourseNPlacehold="Give a bried course description..."
            propWidth="191px"
            propHeight="26px"
          />
        </div>
        <CourseDetails2
          coursePrerequisites="Course Prerequisites"
          whatAreThePrerequPlacehol="What are the prerequisites?"
          propPadding="0px var(--padding-7xs) 0px 1.7999999999992724px"
          propWidth="346.8px"
        />
        <FrameComponent7 />
        <div className="lecture-details-wrapper">
          <b className="lecture-details">Lecture Details</b>
        </div>
        <FrameComponent8
          courseName="Lecture Timings"
          whatIsTheCourseNPlacehold="What are the lecture timings?"
          propWidth="262.3px"
          propHeight="26px"
        />
        <CourseDetails2
          coursePrerequisites="Lecture Days"
          whatAreThePrerequPlacehol="What are the lecture days?"
          propPadding="0px var(--padding-10xs) 0px var(--padding-9xs)"
          propWidth="262.3px"
        />
        <LectureLocation />
        <div className="register-frame">
          <button className="register2">
            <div className="submit">Submit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
