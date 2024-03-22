import { useMemo } from "react";
import "./Month202401January.css";

const Month202401January = ({
  vuesaxlineararrowLeft,
  vuesaxlineararrowLeft1,
  line21,
  propFlex,
  propHeight,
}) => {
  const month202401JanuaryStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div className="month-2024-01-january" style={month202401JanuaryStyle}>
      <div className="header8">
        <img
          className="vuesaxlineararrow-left-icon4"
          alt=""
          src={vuesaxlineararrowLeft}
        />
        <div className="atoms-mouth">
          <div className="text">January 2024</div>
        </div>
        <img
          className="vuesaxlineararrow-left-icon5"
          alt=""
          src={vuesaxlineararrowLeft1}
        />
      </div>
      <img className="month-2024-01-january-child" alt="" src={line21} />
      <div className="grid">
        <nav className="line">
          <div className="atoms-week-dey">
            <div className="text1">Mo</div>
          </div>
          <div className="atoms-week-dey1">
            <div className="image-analyzer">Tu</div>
          </div>
          <div className="atoms-week-dey2">
            <div className="data-processor">We</div>
          </div>
          <div className="atoms-week-dey1">
            <div className="image-analyzer">Th</div>
          </div>
          <div className="atoms-week-dey4">
            <div className="sequence-combiner">Fr</div>
          </div>
          <div className="atoms-week-dey5">
            <div className="image-analyzer">Sa</div>
          </div>
          <div className="atoms-week-dey1">
            <div className="image-analyzer">Su</div>
          </div>
        </nav>
        <div className="line1">
          <div className="atoms-dey-number">
            <div className="text3">1</div>
          </div>
          <div className="atoms-dey-number1">
            <div className="text4">2</div>
          </div>
          <div className="atoms-dey-number1">
            <div className="text4">3</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">4</div>
          </div>
          <div className="atoms-dey-number4">
            <div className="text6">5</div>
          </div>
          <div className="atoms-dey-number5">
            <div className="text6">6</div>
          </div>
          <div className="atoms-dey-number1">
            <div className="text4">7</div>
          </div>
        </div>
        <div className="line1">
          <div className="atoms-dey-number3">
            <div className="text6">8</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">9</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">10</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">11</div>
          </div>
          <div className="atoms-dey-number11">
            <div className="text14">12</div>
          </div>
          <div className="atoms-week-dey4">
            <div className="text12">13</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">14</div>
          </div>
        </div>
        <div className="line1">
          <div className="atoms-dey-number9">
            <div className="text12">15</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">16</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">17</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">18</div>
          </div>
          <div className="atoms-dey-number18">
            <div className="text12">19</div>
          </div>
          <div className="atoms-dey-number19">
            <div className="text22">20</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">21</div>
          </div>
        </div>
        <div className="line1">
          <div className="atoms-dey-number21">
            <div className="text22">22</div>
          </div>
          <div className="atoms-dey-number21">
            <div className="text22">23</div>
          </div>
          <div className="atoms-dey-number21">
            <div className="text22">24</div>
          </div>
          <div className="atoms-dey-number21">
            <div className="text22">25</div>
          </div>
          <div className="atoms-dey-number25">
            <div className="text22">26</div>
          </div>
          <div className="atoms-dey-number19">
            <div className="text22">27</div>
          </div>
          <div className="atoms-dey-number21">
            <div className="text22">28</div>
          </div>
        </div>
        <div className="line1">
          <div className="atoms-dey-number21">
            <div className="text22">29</div>
          </div>
          <div className="atoms-week-dey1">
            <div className="text32">30</div>
          </div>
          <div className="atoms-dey-number9">
            <div className="text12">31</div>
          </div>
          <div className="atoms-dey-number31">
            <div className="text3">1</div>
          </div>
          <div className="atoms-dey-number32">
            <div className="text4">2</div>
          </div>
          <div className="atoms-dey-number32">
            <div className="text4">3</div>
          </div>
          <div className="atoms-dey-number34">
            <div className="text6">4</div>
          </div>
        </div>
        <div className="line6">
          <div className="atoms-dey-number3">
            <div className="text6">5</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">6</div>
          </div>
          <div className="atoms-dey-number1">
            <div className="text4">7</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">8</div>
          </div>
          <div className="atoms-dey-number39">
            <div className="text6">9</div>
          </div>
          <div className="atoms-dey-number40">
            <div className="text12">10</div>
          </div>
          <div className="atoms-dey-number3">
            <div className="text6">11</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Month202401January;
