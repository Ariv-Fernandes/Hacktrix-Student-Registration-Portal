import "./LoginTeacher.css";

const LoginStudent = () => {
  return (
    <div className="login-student">
      <div className="frame-parent21">
        <FrameComponent11 />
        <div className="access-account-label-wrapper">
          <div className="access-account-label">
            <div className="dont-have-an-account-wrapper">
              <div className="dont-have-an1">Don’t have an account?</div>
            </div>
            <button className="sign-up-container">
              <div className="sign-up1">Sign up</div>
            </button>
          </div>
        </div>
      </div>
      <h1 className="welcome-to-student-container">
        <p className="student-portal">
          <b>{`Welcome to `}</b>
        </p>
        <p className="student-portal">student portal</p>
      </h1>
      <div className="login-to-access1">Login to access your account</div>
      <section className="subadmin-home-parent">
        <img className="subadmin-home-icon" alt="" src="/vector.svg" />
        <img className="vector-icon59" alt="" src="/vector.svg" />
        <img className="edit-profile-icon" alt="" src="/vector-7.svg" />
        <img
          className="vector-icon60"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <img className="vector-icon61" alt="" src="/vector-1.svg" />
        <img className="vector-icon62" alt="" src="/vector-3.svg" />
        <img className="copy-1-icon1" alt="" src="/110092401-copy-1@2x.png" />
      </section>
    </div>
  );
};

export default LoginStudent;
