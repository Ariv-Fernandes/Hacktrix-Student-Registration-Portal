import { useMemo } from "react";
import "./SalaryLocation.css";

const SalaryLocation = ({ mapTrifold, propTop }) => {
  const salaryLocationStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="salary-location" style={salaryLocationStyle}>
      <div className="frame-parent29">
        <div className="search-input-parent">
          <div className="search-input">
            <div className="course-timing">Course Timing</div>
          </div>
          <div className="am-1100-am-parent">
            <div className="am-1100-am">10:00 a.m.-11:00 a.m.</div>
            <div className="language-dropdown">
              <div className="monday-wednesday-friday">
                Monday, Wednesday, Friday
              </div>
            </div>
          </div>
        </div>
        <div className="question-mark-icon">
          <div className="question-mark-icon-child" />
        </div>
      </div>
      <div className="salary-location-inner">
        <div className="frame-parent30">
          <div className="maptrifold-wrapper">
            <img
              className="maptrifold-icon"
              loading="lazy"
              alt=""
              src={mapTrifold}
            />
          </div>
          <div className="spacer-flex-item">
            <div className="course-location">Course Location</div>
            <div className="al-201">AL 201</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryLocation;
