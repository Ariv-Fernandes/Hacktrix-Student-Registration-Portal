import { useState } from "react";
import FrameComponent10 from "./FrameComponent10";
import "./HeroSection1.css";

const HeroSection1 = () => {
  const [whatIsYour4Value, setWhatIsYour4Value] = useState("");
  const [enterYourPasswordValue, setEnterYourPasswordValue] = useState("");
  return (
    <div className="hero-section4">
      <b className="personal-details2">Personal Details</b>
      <div className="identity-data-parent">
        <FrameComponent10
          fullName="Full Name"
          whatIsYourFullNaPlacehold="What is your full name?"
          propDebugCommit="unset"
          propWidth="170.8px"
          propDebugCommit1="unset"
        />
        <FrameComponent10
          fullName="Date Of Birth"
          whatIsYourFullNaPlacehold="What is your DOB?"
          propDebugCommit="unset"
          propWidth="191px"
          propDebugCommit1="unset"
        />
        <FrameComponent10
          fullName="Gender"
          whatIsYourFullNaPlacehold="What is your gender?"
          propDebugCommit="unset"
          propWidth="346.8px"
          propDebugCommit1="unset"
        />
        <FrameComponent10
          fullName="Email ID"
          whatIsYourFullNaPlacehold="What is your email ID?"
          propDebugCommit="unset"
          propWidth="346.8px"
          propDebugCommit1="unset"
        />

        <FrameComponent10
          fullName="Mobile Number"
          whatIsYourFullNaPlacehold="What is your mobile number?"
          propDebugCommit="unset"
          propWidth="262.3px"
          propDebugCommit1="unset"
        />
      </div>
      <b className="department-details">Department Details</b>
      <div className="registration-form-fields-conta">
        <FrameComponent10
          fullName="Department Name"
          whatIsYourFullNaPlacehold="What is your Department Name?"
          propDebugCommit="unset"
          propWidth="262.3px"
          propDebugCommit1="unset"
        />
        <FrameComponent10
          fullName="Current Semester"
          whatIsYourFullNaPlacehold="What is your Current Semester?"
          propDebugCommit="unset"
          propWidth="262.3px"
          propDebugCommit1="unset"
        />
      </div>
      <div className="create-a-password-parent">
        <b className="create-a-password">Create A Password</b>
        <FrameComponent10
          fullName="Password [Min 6 Characters]"
          whatIsYourFullNaPlacehold="Enter your password..."
          propDebugCommit="unset"
          propWidth="346.8px"
          propDebugCommit1="unset"
        />
      </div>
      <div className="submit-request">
        <button className="register4">
          <div className="submit-request1">Submit Request</div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection1;
