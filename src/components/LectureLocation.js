import FrameComponent8 from "./FrameComponent8";
import CourseDetails2 from "./CourseDetails2";
import "./LectureLocation.css";

const LectureLocation = () => {
  return (
    <div className="lecture-location">
      <FrameComponent8
        courseName="Lecture Location"
        whatIsTheCourseNPlacehold="Where will the lecture be conducted?"
        propWidth="262.3px"
        propHeight="26px"
      />
      <CourseDetails2
        coursePrerequisites="Professor In-Charge"
        whatAreThePrerequPlacehol="Who is the professor in-charge?"
        propPadding="0px var(--padding-9xs-5) 0px 0px"
        propWidth="262.3px"
      />
      <div className="syllabus-upload-group">
        <div className="syllabus-upload1">Syllabus Upload</div>
        <div className="max-size-limit">
          <button className="upload-syllabus-container">
            <div className="upload-syllabus1">Upload Syllabus</div>
          </button>
          <div className="doc-docx-pdf-rtf-max-size-container">
            <div className="doc-docx-pdf1">
              DOC, DOCx, PDF, RTF | Max size : 2mb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LectureLocation;
