import HeroSection from "../components/HeroSection";
import "./ManageCourseDetails.css";

const ManageCourseDetails = () => {
  return (
    <div className="manage-course-details">
      <main className="vector-parent">
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon2"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
        <img
          className="vector-icon3"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="vector-icon4"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="vector-icon5"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon6" alt="" src="/vector.svg" />
        <img className="vector-icon7" alt="" src="/vector-7.svg" />
      </main>
      <HeroSection />
    </div>
  );
};

export default ManageCourseDetails;
