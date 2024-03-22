import { useState, useMemo } from "react";
import "./FrameComponent10.css";

const FrameComponent10 = ({
  fullName,
  whatIsYourFullNaPlacehold,
  propDebugCommit,
  propWidth,
  propDebugCommit1,
}) => {
  const [whatIsYourValue, setWhatIsYourValue] = useState("");
  const fullNameStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
      width: propWidth,
    };
  }, [propDebugCommit, propWidth]);

  const phoneNumberInputStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className="full-name-container">
      <div className="full-name2" style={fullNameStyle}>
        {fullName}
      </div>
      <div className="phone-number-input" style={phoneNumberInputStyle}>
        <input
          className="what-is-your8"
          placeholder={whatIsYourFullNaPlacehold}
          type="text"
          value={whatIsYourValue}
          onChange={(event) => setWhatIsYourValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default FrameComponent10;
