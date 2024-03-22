import { useMemo } from "react";
import "./DefaultCase.css";

const DefaultCase = ({ vuesaxboldsetting2, boldnotification, propGap }) => {
  const defaultCaseStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="default-case" style={defaultCaseStyle}>
      <div className="help12">
        <img
          className="vuesaxboldsetting-2-icon2"
          loading="lazy"
          alt=""
          src={vuesaxboldsetting2}
        />
        <div className="account-settings2">Account settings</div>
      </div>
      <div className="default-case-inner">
        <div className="boldnotification-parent">
          <img
            className="boldnotification-icon6"
            loading="lazy"
            alt=""
            src={boldnotification}
          />
          <div className="notification-preferences2">
            Notification preferences
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultCase;
