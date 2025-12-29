import "bootstrap/dist/css/bootstrap.min.css";

const Days = ({ Days }) => {
  return (
    <div className="mb-3"> 
      <div
        className="d-flex align-items-center justify-content-between p-3 shadow-sm"
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
        <div className="d-flex gap-3" style={{ minWidth: "80px", justifyContent: "flex-end" }}>
          <span className="fw-bold">{Days.TemperatureMorning}</span>
          <span className="text-white-50">{Days.TemperatureNight}</span>
        </div>
      </div>
    </div>
  );
};

export default Days;