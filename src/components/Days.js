import "bootstrap/dist/css/bootstrap.min.css";
const Days = ({Days}) => {
  return (
    <div
      className="card text-white shadow-lg mb-4 p-3"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "25px",
      }}
    >
  

      <div className="d-flex flex-column gap-3">
        <div
          className="d-flex align-items-center justify-content-between p-3"
          style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "15px",
          }}
        >
          <div className="fw-semibold" style={{ width: "120px" }}>
            {Days.Day}
          </div>

          <div className="d-flex align-items-center justify-content-center flex-grow-1 gap-3">
            {Days.Icon}
            <span className="text-capitalize">{Days.Condition}</span>
          </div>

          <div className="d-flex gap-3">
            <span className="fw-semibold">{Days.TemperatureMorning}</span>
            <span className="text-opacity-75">{Days.TemperatureNight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Days;
