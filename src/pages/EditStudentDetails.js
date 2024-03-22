import { useState } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import "./EditStudentDetails.css";

const EditStudentDetails = () => {
  const [whatIsYourValue, setWhatIsYourValue] = useState("");
  const [whatIsYour1Value, setWhatIsYour1Value] = useState("");
  const [whatIsYour2Value, setWhatIsYour2Value] = useState("");
  return (
    <div className="edit-student-details">
      <main className="vector-group">
        <img className="vector-icon8" alt="" src="/vector.svg" />
        <img className="vector-icon9" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon10"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon11"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="vector-icon12"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="vector-icon13"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon14" alt="" src="/vector.svg" />
        <img className="vector-icon15" alt="" src="/vector-7.svg" />
      </main>
      <form className="hero-section">
        <b className="personal-details">Personal Details</b>
        <div className="header-row">
          <div className="full-name-parent">
            <div className="full-name">Full Name</div>
            <div className="gender-selection">
              <input
                className="what-is-your"
                placeholder="What is your full name?"
                type="text"
                value={whatIsYourValue}
                onChange={(event) => setWhatIsYourValue(event.target.value)}
              />
            </div>
          </div>
          <div className="full-name-parent">
            <div className="date-of-birth">Date Of Birth</div>
            <div className="what-is-your-dob-wrapper">
              <input
                className="what-is-your"
                placeholder="What is your DOB?"
                type="text"
                value={whatIsYour1Value}
                onChange={(event) => setWhatIsYour1Value(event.target.value)}
              />
            </div>
          </div>
          <div className="full-name-parent">
            <div className="gender">Gender</div>
            <div className="what-is-your-dob-wrapper">
              <input
                className="what-is-your"
                placeholder="What is your gender?"
                type="text"
                value={whatIsYour2Value}
                onChange={(event) => setWhatIsYour2Value(event.target.value)}
              />
            </div>
          </div>
          <FrameComponent1
            teacherEmailID="Email ID"
            whatIsYourEmailIPlacehold="What is your email ID?"
            propDisplay="inline-block"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
          <FrameComponent1
            teacherEmailID="Address"
            whatIsYourEmailIPlacehold="What is your address?"
            propDisplay="inline-block"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
        </div>
        <div className="register-wrapper">
          <button className="register">
            <div className="edit">Edit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentDetails;
