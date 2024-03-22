import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-child" />
      <div className="image-1-wrapper">
        <img
          className="image-1-icon"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
      </div>
      <div className="hero-inner">
        <div className="frame-parent42">
          <div className="welcome-wrapper">
            <h2 className="welcome1">Welcome!</h2>
          </div>
          <div className="ready-for-the">Ready for the next step?</div>
        </div>
      </div>
      <div className="hero-inner1">
        <div className="teacher-wrapper">
          <Link class="route" to="/login-teacher">
            <div className="teacher">Teacher</div>{" "}
          </Link>
        </div>
      </div>
      <div className="student-wrapper">
        <Link class="route" to="/login-student">
          <div className="teacher">Student</div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
