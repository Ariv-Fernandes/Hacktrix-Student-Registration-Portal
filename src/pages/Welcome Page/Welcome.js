import Hero from "../../components/Welcome Components/Hero";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome">
      <main className="vector-parent9">
        <img className="vector-icon45" alt="" src="/vector.svg" />
        <img className="vector-icon46" alt="" src="/vector-1.svg" />
        <img className="vector-icon47" alt="" src="/vector-1.svg" />
        <img
          className="vector-icon48"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
        <img
          className="vector-icon49"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img
          className="vector-icon50"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon51" alt="" src="/vector.svg" />
        <img className="vector-icon52" alt="" src="/vector-7.svg" />
      </main>
      <Hero />
    </div>
  );
};

export default Welcome;
