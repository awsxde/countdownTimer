import iconFacebook from "./assets/images/icon-facebook.svg";
import iconPinterest from "./assets/images/icon-pinterest.svg";
import iconInstagram from "./assets/images/icon-instagram.svg";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">We're Launching soon</h1>
      <div className="timerContainer">
        <div className="timerChild">
          <div className="blackCircleLeft"></div>
          <div className="blackCircleRight"></div>
          <div className="timerChildTop">
            <p>23</p>
          </div>
          <div className="timerChildBottom">
            <p>23</p>
          </div>
          <p className="timerChildTitle">days</p>
        </div>
        <div className="timerChild">
          <div className="blackCircleLeft"></div>
          <div className="blackCircleRight"></div>
          <div className="timerChildTop">
            <p>23</p>
          </div>
          <div className="timerChildBottom">
            <p>23</p>
          </div>
          <p className="timerChildTitle">hours</p>
        </div>
        <div className="timerChild">
          <div className="blackCircleLeft"></div>
          <div className="blackCircleRight"></div>
          <div className="timerChildTop">
            <p>23</p>
          </div>
          <div className="timerChildBottom">
            <p>23</p>
          </div>
          <p className="timerChildTitle">minutes</p>
        </div>
        <div className="timerChild">
          <div className="blackCircleLeft"></div>
          <div className="blackCircleRight"></div>
          <div className="timerChildTop">
            <p>23</p>
          </div>
          <div className="timerChildBottom">
            <p>23</p>
          </div>
          <p className="timerChildTitle">seconds</p>
        </div>
      </div>
      <div className="logosContainer">
        <img src={iconFacebook} alt="logo" />
        <img src={iconPinterest} alt="logo" />
        <img src={iconInstagram} alt="logo" />
      </div>
    </div>
  );
}
