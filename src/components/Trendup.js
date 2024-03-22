import { useMemo } from "react";
import "./Trendup.css";

const Trendup = ({ vuesaxboldnote2, line20, propTop }) => {
  const trendupStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="trendup" style={trendupStyle}>
      <div className="archivebook">
        <div className="dashboard1">
          <img
            className="vuesaxboldnote-2-icon"
            loading="lazy"
            alt=""
            src={vuesaxboldnote2}
          />
          <div className="dashboard2">Dashboard</div>
        </div>
      </div>
      <img className="trendup-child" loading="lazy" alt="" src={line20} />
    </div>
  );
};

export default Trendup;
