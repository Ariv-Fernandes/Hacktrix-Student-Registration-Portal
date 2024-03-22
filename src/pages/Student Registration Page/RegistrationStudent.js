import HeroSection1 from "../../components/Student Registration Components/HeroSection1";
import "./RegistrationStudent.css";

const RegistrationStudent = () => {
  return (
    <div className="registration-student">
      <div className="vector-parent7">
        <img className="vector-icon31" alt="" src="/vector.svg" />
        <img className="vector-icon32" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon33"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <section className="vector-parent8">
        <img
          className="vector-icon34"
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <img className="vector-icon35" alt="" src="/vector.svg" />
      </section>
      <div className="personal-details-department-de">
        <img
          className="vector-icon36"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon37"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="input-field-triplets" alt="" src="/vector-7.svg" />
      </div>
      <HeroSection1 />
    </div>
  );
};

export default RegistrationStudent;
