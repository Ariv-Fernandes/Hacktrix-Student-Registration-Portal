import { useState } from "react";
import FrameComponent10 from "./Student Registration Components/FrameComponent10";
import FrameComponent9 from "./FrameComponent9";
import "./HeroSection2.css";

const HeroSection2 = () => {
  const [whatIsYour2Value, setWhatIsYour2Value] = useState("");
  const [whatIsYour3Value, setWhatIsYour3Value] = useState("");
  return (
    <div className="hero-section5">
      <div className="personal-details-parent">
        <b className="personal-details3">Personal Details</b>
        <FrameComponent10
          fullName="Full Name"
          whatIsYourFullNaPlacehold="What is your full name?"
          propWidth="170.8px"
        />
        <FrameComponent10
          fullName="Date Of Birth"
          whatIsYourFullNaPlacehold="What is your DOB?"
          propDebugCommit="unset"
          propWidth="191px"
          propDebugCommit1="unset"
        />
        <div className="frame-wrapper11">
          <div className="gender-container">
            <div className="gender2">Gender</div>
            <div className="what-is-your-gender-frame">
              <input
                className="what-is-your10"
                placeholder="What is your gender?"
                type="text"
                value={whatIsYour2Value}
                onChange={(event) => setWhatIsYour2Value(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent41">
          <div className="teacher-email-id-container">
            <div className="teacher-email-id1">Teacher Email ID</div>
          </div>
          <div className="what-is-your-email-id-frame">
            <input
              className="what-is-your10"
              placeholder="What is your email ID?"
              type="text"
              value={whatIsYour3Value}
              onChange={(event) => setWhatIsYour3Value(event.target.value)}
            />
          </div>
        </div>
      </div>
      <FrameComponent9
        departmentDetails="Department Details"
        departmentName="Department Name"
        whatIsYourDepartmPlacehol="What is your Department Name?"
        propWidth="262.3px"
        propDisplay="flex"
      />
      <FrameComponent9
        departmentDetails="Create A Password"
        departmentName="Password [Min 6 characters]"
        whatIsYourDepartmPlacehol="Enter your password..."
        propPadding="0px 0px 20.100000000000023px"
        propWidth="262.3px"
        propDisplay="inline-block"
      />
      <div className="register-wrapper2">
        <button className="register5">
          <div className="register6">Register</div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection2;
