import HeroSection2 from "../components/HeroSection2";
import "./RegistrationTeacher.css";

const RegistrationTeacher = () => {
  return (
    <div className="registration-teacher">
      <main className="frame-main">
        <img className="vector-icon38" alt="" src="/vector.svg" />
        <img className="vector-icon39" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon40"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon41"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="vector-icon42"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="vector-icon43"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon44" alt="" src="/vector.svg" />
        <img className="gender-input-icon" alt="" src="/vector-7.svg" />
      </main>
      <HeroSection2 />
    </div>
  );
};

export default RegistrationTeacher;
