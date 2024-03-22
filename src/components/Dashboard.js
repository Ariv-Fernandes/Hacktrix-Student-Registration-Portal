import Trendup from "./Trendup";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="app-menu" />
      <div className="logo-wrapper">
        <div className="logo">
          <div className="vuesaxboldbook-wrapper">
            <img
              className="vuesaxboldbook-icon2"
              loading="lazy"
              alt=""
              src="/vuesaxboldbook.svg"
            />
          </div>
          <b className="hacktrix">HackTrix</b>
        </div>
      </div>
      <div className="dashboard-inner">
        <img
          className="frame-child10"
          loading="lazy"
          alt=""
          src="/line-19.svg"
        />
      </div>
      <div className="frame-parent25">
        <Trendup
          vuesaxboldnote2="/vuesaxboldnote2.svg"
          line20="/line-20.svg"
          propTop="0px"
        />
        <div className="frame-parent26">
          <div className="academic-wrapper">
            <div className="academic">ACADEMIC</div>
          </div>
          <div className="schedule-wrapper">
            <div className="schedule">
              <div className="vuesaxboldmenu-board-wrapper">
                <img
                  className="vuesaxboldmenu-board-icon"
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldmenuboard.svg"
                />
              </div>
              <div className="homeworks">Schedule</div>
            </div>
          </div>
          <div className="frame-wrapper6">
            <div className="vuesaxboldelement-parent">
              <button className="vuesaxboldelement">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    alt=""
                    src="/vuesaxboldelement4.svg"
                  />
                </div>
                <div className="student-details">Student Details</div>
              </button>
              <div className="help">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldclipboardtext.svg"
                  />
                </div>
                <div className="homeworks">Homeworks</div>
              </div>
              <div className="grade-report">
                <div className="vuesaxboldtrend-up-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldtrendup.svg"
                  />
                </div>
                <div className="homeworks">grade report</div>
              </div>
              <div className="help">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldbook-1.svg"
                  />
                </div>
                <div className="homeworks">Enrolled Courses</div>
              </div>
              <div className="help">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldarchivebook.svg"
                  />
                </div>
                <div className="homeworks">Course Plan</div>
              </div>
              <div className="help">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldcalendartick.svg"
                  />
                </div>
                <div className="homeworks">Attendance</div>
              </div>
              <div className="libraries">
                <div className="vuesaxboldmenu-board-wrapper">
                  <img
                    className="vuesaxboldmenu-board-icon"
                    loading="lazy"
                    alt=""
                    src="/vuesaxboldbook-2.svg"
                  />
                </div>
                <div className="homeworks">Libraries</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="frame-child11"
          loading="lazy"
          alt=""
          src="/line-34.svg"
        />
        <div className="frame-parent27">
          <div className="settings-wrapper">
            <div className="settings">SETTINGS</div>
          </div>
          <div className="help1">
            <div className="vuesaxboldmenu-board-wrapper">
              <img
                className="vuesaxboldmenu-board-icon"
                loading="lazy"
                alt=""
                src="/vuesaxboldsetting2.svg"
              />
            </div>
            <div className="homeworks">Account settings</div>
          </div>
        </div>
        <div className="frame-parent28">
          <div className="vuesaxboldmenu-board-wrapper">
            <img
              className="boldnotification-icon4"
              loading="lazy"
              alt=""
              src="/boldnotification-1.svg"
            />
          </div>
          <div className="notification-preferences">
            Notification preferences
          </div>
        </div>
        <img className="frame-child12" alt="" src="/line-33.svg" />
        <div className="paul-walker1">
          <div className="vuesaxboldmenu-board-wrapper">
            <img
              className="vuesaxboldlogout-icon"
              loading="lazy"
              alt=""
              src="/vuesaxboldlogout.svg"
            />
          </div>
          <div className="logout">Logout</div>
        </div>
        <div className="vector-parent11">
          <img
            className="frame-child13"
            loading="lazy"
            alt=""
            src="/line-21.svg"
          />
          <div className="vjti-college-vjti-container">
            <span className="vjti-college-vjti-container1">
              <p className="vjti-college">VJTI College</p>
              <p className="vjti-college">Vjti Road</p>
              <p className="vjti-college">Matunga-East</p>
              <p className="vjti-college">Mumbai, Maharastra</p>
              <p className="vjti-college">helpdesk- 9877723456</p>
              <p className="vjti-college">email- vjtihelpdesk@Gmail.com</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
