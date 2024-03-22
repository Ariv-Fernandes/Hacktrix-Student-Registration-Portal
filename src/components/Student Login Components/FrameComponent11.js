import { useState } from "react";
import "./FrameComponent11.css";

const FrameComponent11 = () => {
  const [usernameTextValue, setUsernameTextValue] = useState("");
  const [passwordTextValue, setPasswordTextValue] = useState("");
  return (
    <form className="frame-form">
      <div className="login-group">
        <h1 className="login2">Login</h1>
        <div className="enter-your-account1">Enter your account details</div>
      </div>
      <div className="frame-parent43">
        <div className="username-parent">
          <input
            className="username1"
            placeholder="Username"
            type="text"
            value={usernameTextValue}
            onChange={(event) => setUsernameTextValue(event.target.value)}
          />
          <div className="afcd" />
        </div>
        <div className="frame-parent44">
          <div className="password-parent">
            <input
              className="password1"
              placeholder="Password"
              type="text"
              value={passwordTextValue}
              onChange={(event) => setPasswordTextValue(event.target.value)}
            />
            
          </div>
          <div className="afcd" />
        </div>
      </div>
      <button className="login-container">
        <div className="login3">Login</div>
      </button>
    </form>
  );
};

export default FrameComponent11;
