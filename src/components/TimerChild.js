export default function TimerChild({ num, title }) {
  return (
    <div className="timerChild">
      <div className="blackCircleLeft"></div>
      <div className="blackCircleRight"></div>
      <div className="timerChildTop">
        <p>{num}</p>
      </div>
      <div className="timerChildBottom">
        <p>{num}</p>
      </div>
      <p className="timerChildTitle">{title}</p>
    </div>
  );
}
