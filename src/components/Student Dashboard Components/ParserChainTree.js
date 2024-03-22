import "./ParserChainTree.css";

const ParserChainTree = ({
  line29,
  vuesaxboldframe,
  vuesaxboldcalendar2,
  vuesaxboldclock,
  vuesaxboldlocation,
}) => {
  return (
    <div className="parser-chain-tree">
      <div className="decision-maker2">
        <textarea className="data-merger-graph" rows={9} cols={10} />
        <div className="format-converter-graph">
          <div className="format-converter-graph-child" />
          <div className="data-reducer">
            <div className="advanced-web-design3">
              Advanced Web Design - ITD201
            </div>
            <div className="value-extractor-network-x">
              <img
                className="value-extractor-network-x-child"
                alt=""
                src={line29}
              />
              <div className="format-converter-network-x">
                <img
                  className="vuesaxboldframe-icon6"
                  alt=""
                  src={vuesaxboldframe}
                />
                <div className="dr-johnson">Dr. Johnson</div>
              </div>
            </div>
          </div>
          <div className="error-handler-graph">
            <img
              className="vuesaxboldframe-icon6"
              alt=""
              src={vuesaxboldcalendar2}
            />
            <div className="dr-johnson">{`Tuesday & Thursday`}</div>
          </div>
          <div className="error-handler-graph">
            <img
              className="vuesaxboldframe-icon6"
              alt=""
              src={vuesaxboldclock}
            />
            <div className="pm-300">1:30 PM - 3:00 PM</div>
          </div>
          <div className="error-handler-graph">
            <img
              className="vuesaxboldframe-icon6"
              alt=""
              src={vuesaxboldlocation}
            />
            <div className="dr-johnson">Computer Lab 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParserChainTree;
