import { useState } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import "./EditTeacherDetails.css";

const EditTeacherDetails = () => {
  const [whatIsYourValue, setWhatIsYourValue] = useState("");
  const [whatIsYour1Value, setWhatIsYour1Value] = useState("");
  const [whatIsYour2Value, setWhatIsYour2Value] = useState("");
  return (
    <div className="edit-teacher-details">
      <main className="edit-teacher-details1">
        <img className="vector-icon16" alt="" src="/vector.svg" />
        <img className="vector-icon17" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon18"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon19"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="vector-icon20"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="vector-icon21"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon22" alt="" src="/vector.svg" />
        <img className="vector-icon23" alt="" src="/vector-7.svg" />
      </main>
      <form className="hero-section1">
        <b className="personal-details1">Personal Details</b>
        <div className="frame-parent">
          <div className="full-name-group">
            <div className="full-name1">Full Name</div>
            <div className="what-is-your-dob-container">
              <input
                className="what-is-your3"
                placeholder="What is your full name?"
                type="text"
                value={whatIsYourValue}
                onChange={(event) => setWhatIsYourValue(event.target.value)}
              />
            </div>
          </div>
          <div className="full-name-group">
            <div className="date-of-birth2">Date Of Birth</div>
            <div className="what-is-your-dob-container">
              <input
                className="what-is-your3"
                placeholder="What is your DOB?"
                type="text"
                value={whatIsYour1Value}
                onChange={(event) => setWhatIsYour1Value(event.target.value)}
              />
            </div>
          </div>
          <div className="full-name-group">
            <div className="gender1">Gender</div>
            <div className="what-is-your-dob-container">
              <input
                className="what-is-your3"
                placeholder="What is your gender?"
                type="text"
                value={whatIsYour2Value}
                onChange={(event) => setWhatIsYour2Value(event.target.value)}
              />
            </div>
          </div>
          <FrameComponent1
            teacherEmailID="Teacher Email ID"
            whatIsYourEmailIPlacehold="What is your email ID?"
            propDisplay="inline-block"
          />
          <FrameComponent1
            teacherEmailID="Address"
            whatIsYourEmailIPlacehold="What is your address?"
            propDisplay="inline-block"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
        </div>
        <div className="register-container">
          <button className="register1">
            <div className="edit1">Edit</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeacherDetails;
