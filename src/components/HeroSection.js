import { useState } from "react";
import FrameComponent from "./FrameComponent";
import "./HeroSection.css";

const HeroSection = () => {
  const [whatAreThe1Value, setWhatAreThe1Value] = useState("");
  return (
    <form className="hero-section3">
      <b className="lecture-details1">Lecture Details</b>
      <div className="frame-parent22">
        <FrameComponent
          lectureTimings="Lecture Timings"
          whatAreTheLecturePlacehol="What are the lecture timings?"
        />
        <div className="lecture-days-parent">
          <div className="lecture-days">Lecture Days</div>
          <div className="what-are-the-lecture-days-wrapper">
            <input
              className="what-are-the1"
              placeholder="What are the lecture days?"
              type="text"
              value={whatAreThe1Value}
              onChange={(event) => setWhatAreThe1Value(event.target.value)}
            />
          </div>
        </div>
        <FrameComponent
          lectureTimings="Lecture Location"
          whatAreTheLecturePlacehol="Where will the lecture be conducted?"
        />
        <FrameComponent
          lectureTimings="Professor In-Charge"
          whatAreTheLecturePlacehol="Who is the professor in-charge?"
        />
        <div className="syllabus-upload-parent">
          <div className="syllabus-upload">Syllabus Upload</div>
          <div className="frame-parent23">
            <button className="upload-syllabus-wrapper">
              <div className="upload-syllabus">Upload Syllabus</div>
            </button>
            <div className="doc-docx-pdf-rtf-max-size-wrapper">
              <div className="doc-docx-pdf">
                DOC, DOCx, PDF, RTF | Max size : 2mb
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="register-wrapper1">
        <button className="register3">
          <div className="edit2">Edit</div>
        </button>
      </div>
    </form>
  );
};

export default HeroSection;
